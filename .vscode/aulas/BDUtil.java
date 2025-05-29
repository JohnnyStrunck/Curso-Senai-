import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import javax.swing.JOptionPane;


public class BDUtil{
    public String sql;
    public Connection connection;
    public PreparedStatement preparedStatement;
    private static final String URL_BD = "jdbc:postgresql://localhost:5432/olimpiadas";
    private static final String USER_BD = "postgres";
    private static final String PASS_BD = "senai";
    public static String getURLBD(){
        return URL_BD;
    }
    public static String getUserBd(){
        return USER_BD;
    }
    public static String getPassBd(){
        return PASS_BD;
    }
    
    List<String> lista = new ArrayList<String>();
    public List<String> getLista() {
        return lista;
    }
    public void setLista(List<String> lista) {
        this.lista = lista;
    }
    
    public void  executaBDSelect(String selecSql, String selectField)throws SQLException{
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try{
            connection = DriverManager.getConnection(URL_BD, USER_BD, PASS_BD);
            String selectSQL = selecSql;
            preparedStatement = connection.prepareStatement(selectSQL);
            ResultSet rs = preparedStatement.executeQuery();
            lista.add("");
            while (rs.next()) {
                String select = rs.getString(selectField);
                lista.add(select);
                //Connection.sort(lista);

            }


        }catch(SQLException e){
            JOptionPane.showMessageDialog(null, "Problema ao acessar o Banco de Dados!");
            e.printStackTrace();
        }finally{
            if(preparedStatement != null){
                preparedStatement.close();
            }
            if (connection != null){
                connection.close();
                
            }
        }
        
    }

}