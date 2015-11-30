package com.aht.api.engine;

import java.sql.*;

/**
 * Created by azu on 27/10/15.
 */
public class ItemRecommender {

    public ResultSet getRecommendationsForItem(long id,int numberOfRecommendations, Connection con){
        ResultSet rs = null;
        try(Statement stmt = con.createStatement()){
            rs = stmt.executeQuery("MATCH (d1:Dish)-[s:SAME_CATEGORIES]-(reco:Dish) "+
                    "WHERE id(d1)="+id+" "+
                    "WITH     reco, s.similarity AS sim " +
                    "ORDER BY sim DESC LIMIT "+numberOfRecommendations+" " +
                    "RETURN   reco");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rs;
    }

    public ResultSet selectItemLike(String query, Connection con) throws SQLException {
        ResultSet rs = null;
        try(Statement stmt = con.createStatement()){
            rs = stmt.executeQuery("MATCH (d:Dish) WHERE d.name =~ '.*"+query+".*' return d");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rs;
    }

    public ResultSet getUserNeighbors(int userID, Connection con) throws SQLException {
        ResultSet rs = null;
        try(Statement stmt = con.createStatement()){
            rs = stmt.executeQuery("MATCH (u:User {userID = "+userID+"}) return u;");
        } catch (SQLException e){
            e.printStackTrace();
        }
        return rs;
    }

    public ResultSet getRecommendationsByUser(int userID, Connection con) throws SQLException {
        ResultSet rs = null;
        try(Statement stmt = con.createStatement()){
            rs = stmt.executeQuery("MATCH    (b:User)-[r:RATED]->(m:Dish), (b)-[s:NEIGHBOR]-(a:User {userID: "+userID+"})\n" +
                    "WHERE    NOT((a)-[:RATED]->(m))\n" +
                    "WITH     m, s.similarity AS similarity, r.rating AS rating\n" +
                    "ORDER BY m.name, similarity DESC\n" +
                    "WITH     m.name AS dish, COLLECT(rating)[0..3] AS ratings\n" +
                    "WITH     dish, REDUCE(s = 0, i IN ratings | s + i)*1.0 / SIZE(ratings) AS reco\n" +
                    "ORDER BY reco DESC\n" +
                    "RETURN   dish AS Dish, reco AS Recommendation;");
        } catch (SQLException e){
            e.printStackTrace();
        }
        return rs;
    }

}
