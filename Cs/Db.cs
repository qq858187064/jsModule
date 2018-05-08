#region Usings
using System;
using System.Data;
using System.Web;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Configuration;
#endregion
namespace C
{
    public class Db
    {
        public string CmdTxt{get;set;}
        public SqlCommand Cmd{get;set;}
        public SqlConnection Con{get;set;}
        #region Install
        public static void SaveCon(SqlConnectionStringBuilder Sb)
        {
            Configuration Cfg = WebConfigurationManager.OpenWebConfiguration("/");
            ConnectionStringsSection Css = Cfg.ConnectionStrings;
            Css.ConnectionStrings.Add(new ConnectionStringSettings(Sb.InitialCatalog, Sb.ConnectionString));
            Cfg.Save();
        }
        public Db(string Server, string Database, string Uid, string Pwd)
        {
            SqlConnectionStringBuilder Sb = new SqlConnectionStringBuilder();
            Sb.DataSource = Server;
            Sb.InitialCatalog = Database;
            Sb.UserID = Uid;
            Sb.Password = Pwd;
            Con = new SqlConnection(Sb.ConnectionString);
            Cmd = new SqlCommand(CmdTxt, Con);
            //Db.SaveCon(Sb);
            CmdTxt = Sb.ConnectionString;
        }
        #endregion
        public Db(string ConnectionName)
        {
            Con = new SqlConnection(ConfigurationManager.ConnectionStrings[ConnectionName].ConnectionString);
            Cmd = new SqlCommand(CmdTxt, Con);
            Cmd.CommandType = CommandType.StoredProcedure;
        }
    }
}