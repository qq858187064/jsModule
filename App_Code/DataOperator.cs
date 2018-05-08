using System;
using System.Text;
using System.Collections;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

/// <summary>
/// 数据操作层
/// </summary>
public class DataOperator
{
    //CmdTxt属性
    string _CmdTxt;
    public string CmdTxt
    {
        get
        {
            return _CmdTxt;
        }
        set
        {
            _CmdTxt = value;
        }
    }

    //声明用于存储用户息信的数据
    //string[] UserInfo=new string[3];


    //声明全局变量
    SqlConnection _Con;
    public SqlConnection Con
    {
        get
        {
            return _Con;
        }
        set
        {
            _Con = value;
        }
    }
    SqlCommand _Cmd;
    public SqlCommand Cmd
    {
        get
        {
            return _Cmd;
        }
        set
        {
            _Cmd = value;
        }
    }

    //构造时初始化
    public DataOperator(string ConnectionName)
    {
        Con = new SqlConnection(ConfigurationManager.ConnectionStrings[ConnectionName].ConnectionString);
        Cmd = new SqlCommand(CmdTxt, Con);
        Cmd.CommandType = CommandType.StoredProcedure;
    }
    /*
     * 可以作些让自己意外的事，一直在做自己过去做过的事情，只能越来越像过去的自己
            <add name="Dev" connectionString="server=172.20.2.239;database=Dev;Uid=j_cnfol_all;Pwd=w4747147"/>
     */
    public DataOperator(string Server, string Database, string Uid, string Pwd)
    {
        StringBuilder Sb = new StringBuilder("server=");
        Sb.Append(Server);
        Sb.Append(";database=");
        Sb.Append(Database);
        Sb.Append(";Uid=");
        Sb.Append(Uid);
        Sb.Append(";Pwd=");
        Sb.Append(Pwd);
        #region 加入Config文件
        Configuration Cfg = WebConfigurationManager.OpenWebConfiguration("/");
        ConnectionStringsSection Css = Cfg.ConnectionStrings;
        Css.ConnectionStrings.Add(new ConnectionStringSettings(Database, Sb.ToString()));
        Cfg.Save();
        #endregion
    }

    public static string Connect(string ConStr)
    {
        StringBuilder Sb = new StringBuilder("State:"),
        Tmp = new StringBuilder();
        try
        {
            SqlConnection Scn = new SqlConnection(ConStr);
            Scn.Open();
            Scn.Close();
            Sb.Append("true,");
            Tmp.Append("\"数据库连接成功！\"");
        }
        catch (SqlException e)
        {
            Sb.Append("false,");
            Tmp.Append(e.Message);
        }
        Sb.Append("Msg:");
        Sb.Append(Tmp);
        return Sb.ToString();
    }
    //public static string Connect(string ConStr)
    //{
    //    StringBuilder Sb = new StringBuilder("St:"),
    //    Tmp = new StringBuilder();
    //    SqlConnection Scn = new SqlConnection(ConStr);
    //    try
    //    {
    //        Scn.Open();
    //        Scn.Close();
    //        Sb.Append("true,");
    //        Tmp.Append("\"数据库连接成功！\"");
    //    }
    //    catch (SqlException e)
    //    {
    //        Sb.Append("false,");
    //        Tmp.Append(e.Message);
    //    }
    //    Sb.Append("Msg:");
    //    Sb.Append(Tmp);
    //    return Sb.ToString();
    //}

    //查询用户名并返回
    public string UserName(string uNm)
    {
        Cmd.CommandText = "PcNm";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@uNm", uNm));
        Con.Open();
        string Nm = Convert.ToString(Cmd.ExecuteScalar());
        Con.Close();
        return Nm;
    }

    //判断传入用户名是否存在
    public bool HasName(string uName)
    {
        Cmd.CommandText = "spHasName";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@uNm", uName));
        Con.Open();
        int Count = Convert.ToInt32(Cmd.ExecuteScalar());
        Con.Close();
        return Count > 0 ? true : false;
    }

    //判断传入用户名和密码是否匹配
    public bool ChkPwd(string uNm, string uPwd)
    {
        Cmd.CommandText = "spNmPwd";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@uNm", uNm));
        Cmd.Parameters.Add(new SqlParameter("@uPwd", Encrypt(uPwd)));
        Con.Open();
        int Count = Convert.ToInt32(Cmd.ExecuteScalar());
        Con.Close();
        return Count > 0 ? true : false;
    }

    //判断传入邮箱是否存在
    public bool HasMail(string uName, string uMail)
    {
        Cmd.CommandText = "spHasMail";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@uNm", uName));
        Cmd.Parameters.Add(new SqlParameter("@uEm", uMail));
        Con.Open();
        int Count = Convert.ToInt32(Cmd.ExecuteScalar());
        Con.Close();
        return Count > 0 ? true : false;
    }

    //根据用户名和密码返回相关用户信息数组
    public string[] UserPwd(string uNm, string uPwd)
    {
        try
        {
            Cmd.CommandText = "spUserInfo";
            Cmd.Parameters.Clear();
            Cmd.Parameters.Add(new SqlParameter("@uNm", uNm));
            Cmd.Parameters.Add(new SqlParameter("@uPwd", Encrypt(uPwd)));
            Con.Open();
            SqlDataReader Reader = Cmd.ExecuteReader(CommandBehavior.CloseConnection);
            return ReaderToArray(Reader);
        }
        finally
        {
            Con.Close();
        }
    }

    //用SqlDataReader将行的内容读入数组并返回
    /*
     *各字段与下标为：用户名uNm 0, 密码uPwd 1, 邮箱uEm 2, 身份iNm 3, 该身份权限 iDescr 4
     */
    public string[] ReaderToArray(SqlDataReader Reader)
    {
        string[] arrUser = new string[Reader.FieldCount];
        if (Reader.Read())
        {
            Reader.GetValues(arrUser);
        }
        return arrUser;

    }

    //根据用户名修改密码
    public bool UpdatePwd(string UserName, string NewPwd)
    {
        Cmd.CommandText = "UpdatePwd";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@uNm", UserName));
        Cmd.Parameters.Add(new SqlParameter("@uPwd", Encrypt(NewPwd)));
        try
        {
            Con.Open();
            return Cmd.ExecuteNonQuery() > 0 ? true : false;
        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message, ex);
        }
        finally
        {
            Con.Close();
        }
    }


    //根据传入用户名和密码修改邮箱地址
    public bool UpdateMail(string UserName, string NewMail)
    {
        Cmd.CommandText = "UpdateEm";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@uNm", UserName));
        Cmd.Parameters.Add(new SqlParameter("@uEm", NewMail));
        Con.Open();
        int Affect = Cmd.ExecuteNonQuery();
        Con.Close();
        return Affect > 0 ? true : false;
    }

    /// <summary>
    /// 根据传入用户名和邮箱重置用户密码
    /// </summary>
    /// <param name="UserName"></param>
    /// <param name="NewMail"></param>
    /// <returns></returns>
    //public bool UpdateMail(string UserName, string NewMail)
    //{
    //    //Cmd.CommandText = "UpdateEm";
    //    //Cmd.Parameters.Clear();
    //    //Cmd.Parameters.Add(new SqlParameter("@uNm", UserName));
    //    //Cmd.Parameters.Add(new SqlParameter("@uEm", NewMail));
    //    //Con.Open();
    //    //int Affect = Cmd.ExecuteNonQuery();
    //    //Con.Close();
    //    //return Affect > 0 ? true : false;


    //}



    //返回成员表的DataTable
    public DataTable Mebs()
    {
        Cmd.Parameters.Clear();
        Cmd.CommandText = "spMeb";
        DataTable tb = new DataTable();
        try
        {
            Con.Open();
            SqlDataReader Reader = Cmd.ExecuteReader();
            if (Reader.HasRows)
            {
                tb.Load(Reader);
            }
            return tb;
        }
        catch (SqlException ex)
        {
            throw new Exception(ex.Message, ex);
        }
        finally
        {
            Con.Close();
        }
    }

    //删除用户
    public bool DelMb(string uNm)
    {
        Cmd.CommandText = "spDeleteUser";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@uNm", uNm));
        Con.Open();
        int Affect = Cmd.ExecuteNonQuery();
        Con.Close();
        return Affect > 0 ? true : false;
    }

    //新增用户
    public bool AddMb(string uNm, string uPwd, string uEm)
    {
        Cmd.CommandText = "spAddUser";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@uNm", uNm));
        Cmd.Parameters.Add(new SqlParameter("@uPwd", Encrypt(uPwd)));
        Cmd.Parameters.Add(new SqlParameter("@uEm", uEm));
        Con.Open();
        int Affect = Cmd.ExecuteNonQuery();
        Con.Close();
        return Affect > 0 ? true : false;
    }

    //获取用户身份编号 1为“超级管理员”，2为“管理员”
    public int GetRole(string uNm)
    {
        Cmd.CommandText = "spGetRole";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@uNm", uNm));
        Con.Open();
        int iNo = Convert.ToInt32(Cmd.ExecuteScalar());
        Con.Close();
        return iNo;
    }

    //SHA1加密
    public string Encrypt(string OriginalString)
    {
        return FormsAuthentication.HashPasswordForStoringInConfigFile(OriginalString, "SHA1");
    }

    //从当前上下文Session或Cookie获取用户信息数组并返回
    public static string[] Info()
    {
        HttpCookie cc = HttpContext.Current.Request.Cookies["arrUser"];
        if (HttpContext.Current.Session["arrUser"] != null)
        {
            return (string[])HttpContext.Current.Session["arrUser"];
        }
        else if (cc != null)
        {
            string[] arrUser = new string[cc.Values.Count];
            for (int i = 0; i < arrUser.Length; i++)
            {
                arrUser[i] = HttpUtility.UrlDecode(cc.Values[i.ToString()]);
            }
            return arrUser;
        }
        else
        {
            return null;
        }
    }

    //获取Jobs表及相关表中所有信息
    public DataTable Jobs()
    {
        DataTable Dtb = new DataTable();
        Cmd.CommandText = "AllJobs";
        Cmd.Parameters.Clear();
        Con.Open();
        Dtb.Load(Cmd.ExecuteReader(CommandBehavior.CloseConnection));
        Con.Close();
        return Dtb;
    }

    //根据职位ID删除职位
    public bool DelJob(int JobId)
    {
        Cmd.CommandText = "spDelJob";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@jId", JobId));
        Con.Open();
        int Affect = Cmd.ExecuteNonQuery();
        Con.Close();
        return Affect > 0 ? true : false;
    }

    //修改、新增职位
    public bool UpJob(int jId, string jName, string jDuty, string jQualification, int pId, int dId)
    {
        bool IsAdd = jId == 0;
        Cmd.CommandText = IsAdd ? "spAddJob" : "spUpJob";
        Cmd.Parameters.Clear();
        if (!IsAdd)
        {
            Cmd.Parameters.Add(new SqlParameter("@jId", jId));
        }
        Cmd.Parameters.Add(new SqlParameter("@jName", jName));
        Cmd.Parameters.Add(new SqlParameter("@jDuty", jDuty));
        Cmd.Parameters.Add(new SqlParameter("@jQualification", jQualification));
        Cmd.Parameters.Add(new SqlParameter("@pId", pId));
        Cmd.Parameters.Add(new SqlParameter("@dId", dId));
        Con.Open();
        int Affect = Cmd.ExecuteNonQuery();
        Con.Close();
        return Affect > 0 ? true : false;
    }

    //获取所有工作地点并返回
    public DataTable Position()
    {
        DataTable Tb = new DataTable();
        Cmd.CommandText = "Position";
        Cmd.Parameters.Clear();
        Con.Open();
        Tb.Load(Cmd.ExecuteReader(CommandBehavior.CloseConnection));
        Con.Close();
        return Tb;
    }

    //根据ID获取该工作地点被使用的次数
    public int uPsCount(int pId)
    {
        Cmd.CommandText = "UsingPs";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@pId", pId));
        Con.Open();
        int Ct = (int)Cmd.ExecuteScalar();
        Con.Close();
        return Ct;
    }

    //根据工作地点ID删除工作地点
    public bool DelPs(int pId)
    {
        Cmd.CommandText = "DelPs";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@pId", pId));
        Con.Open();
        int Affect = Cmd.ExecuteNonQuery();
        Con.Close();
        return Affect > 0 ? true : false;
    }

    //修改、新增工作地点
    public bool UpPs(int pId, string jPosition)
    {
        bool IsAdd = pId == 0;
        Cmd.CommandText = IsAdd ? "AddPs" : "UpPs";
        Cmd.Parameters.Clear();
        if (!IsAdd)
        {
            Cmd.Parameters.Add(new SqlParameter("@pId", pId));
        }
        Cmd.Parameters.Add(new SqlParameter("@jPosition", jPosition));
        Con.Open();
        int Affect = Cmd.ExecuteNonQuery();
        Con.Close();
        return Affect > 0 ? true : false;
    }

    //获取所有部门并返回
    public DataTable Department()
    {
        DataTable Tb = new DataTable();
        Cmd.CommandText = "Department";
        Cmd.Parameters.Clear();
        Con.Open();
        Tb.Load(Cmd.ExecuteReader(CommandBehavior.CloseConnection));
        Con.Close();
        return Tb;
    }

    //根据ID获取该部门被使用的次数
    public int uDptCount(int dId)
    {
        Cmd.CommandText = "UsingDpt";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@dId", dId));
        Con.Open();
        int Ct = (int)Cmd.ExecuteScalar();
        Con.Close();
        return Ct;
    }

    //根据指定部门ID删除部门
    public bool DelDpt(int dId)
    {
        Cmd.CommandText = "DelDpt";
        Cmd.Parameters.Clear();
        Cmd.Parameters.Add(new SqlParameter("@dId", dId));
        Con.Open();
        int Affect = Cmd.ExecuteNonQuery();
        Con.Close();
        return Affect > 0 ? true : false;
    }

    //修改、新增部门
    public bool UpDpt(int dId, string jDepartment)
    {
        bool IsAdd = dId == 0;
        Cmd.CommandText = IsAdd ? "AddDpt" : "UpDpt";
        Cmd.Parameters.Clear();
        if (!IsAdd)
        {
            Cmd.Parameters.Add(new SqlParameter("@dId", dId));
        }
        Cmd.Parameters.Add(new SqlParameter("@jDepartment", jDepartment));
        Con.Open();
        int Affect = Cmd.ExecuteNonQuery();
        Con.Close();
        return Affect > 0 ? true : false;
    }

    #region 使用HashTable
    ////根据用户名和密码返回相关用户信息的HashTable
    //public Hashtable UserInfo(string uNm, string uPwd)
    //{
    //    try
    //    {
    //        Cmd.CommandText = "[spUserInfo]";
    //        Cmd.Parameters.Clear();
    //        Cmd.Parameters.Add(new SqlParameter("@uNm", uNm));
    //        Cmd.Parameters.Add(new SqlParameter("@uPwd", Encrypt(uPwd)));
    //        Con.Open();
    //        SqlDataReader Reader = Cmd.ExecuteReader(CommandBehavior.CloseConnection);
    //        return ReaderToHash(Reader);
    //    }
    //    catch (Exception ex)
    //    {
    //        throw new Exception(ex.Message, ex);
    //    }
    //    finally
    //    {
    //        Con.Close();
    //    }
    //}
    ////用SqlDataReader将行的内容读入HashTable并返回
    //public Hashtable ReaderToHash(SqlDataReader Reader)
    //{
    //    Hashtable Tb=null;
    //    if (Reader.Read())
    //    {
    //        Tb = new Hashtable();
    //        for (int i=0;i<Reader.FieldCount;i++)
    //        {
    //            Tb.Add(Reader.GetName(i),Convert.ToString(Reader.GetValue(i)));
    //        }

    //    }
    //    return Tb;
    //}
    #endregion

}