<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="css/style.css" type="text/css"/>
</head>


<body>
    <div class="mainBody">
        <div class="spacer"></div>
        <div class="subBody">
            <div class="header"> <h1>Dash Mash</h1>
            </div>
            <div class="wrap">
                <div class="tableBlock">
                    <table class="table table-dark table-hover">
                        <tr>
                            <th>Destination</th>
                            <th>Travel time</th>
                        </tr>
                      <c:forEach var="origin" items="${places.origins}">
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                       </c:forEach>
                    </table>
                </div>
                <div class="ratio">
                    <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen
                    src="https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJEfGkTumyQYgRefobYzWgPa8&destination=place_id:ChIJOQA1nLXHQYgRT8FMZYCrgo8&key=AIzaSyBA--rGJael1hwT0002X3KWPPENenM-OGs"></iframe>
                    <!-- src="https://www.google.com/maps/embed/v1/directions?origin=${origin}&destination=${destination}&key=AIzaSyBA--rGJael1hwT0002X3KWPPENenM-OGs"></iframe> -->
                </div>
            </div>
            <div class="locationInput">
                <form action="">
                    <label>From:</label>
                    <select name="origin">
                       <!--   <c:forEach var="origin" items="${places.origins}">-->
                        <option>${origin}</option>
                        <!--   </c:forEach>-->
                    </select><br>
                    <label>Destination:</label>
                    <select name="destination">
                        <!--   <c:forEach var="destination" items="${places.destinations}">-->
                        <option>${destination}</option>
                        <!--   </c:forEach>-->
                    </select><br>
                    <input type="submit" value="create">
                </form>
            </div>
            <div class="add"><a href="/add/location"> Add your locations</a></div>
        </div>
        <div class="spacer"></div>
    </div>
    </body>
    </html>