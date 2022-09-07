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
<title>Dojos and Ninjas</title>
</head>
<body>
	<h1>New Dojo</h1>
	<a href="/ninjas/new">New Ninja</a>
	<form:form action="/new/dojo" method="POST" modelAttribute="dojo">
	<form:label path = "name">Name: </form:label>
	<form:input type="text" path="name"/><br>
	<input type="submit" value="Submit">
	</form:form>
	
	
	<table>
		<tr>
			<th>Dojo</th>
			<th>Action</th>
		</tr>
		<c:forEach var="dojo" items="${dojos}">
		<tr>
			<td>${dojo.name}</td>
			<td><a href="/dojo/${dojo.id}/roster">dojo roster</a></td>
		</tr>
		</c:forEach>
	</table>
</body>
</html>