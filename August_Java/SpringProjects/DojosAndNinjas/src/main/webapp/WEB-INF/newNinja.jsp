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
</head>
<body>
		<h1>New Ninja</h1>
	<form:form action="/create/ninja" method="POST" modelAttribute="ninja">
	<form:select path="dojo">
	<c:forEach var="dojo" items="${dojos}">
	<form:option value ="${dojo.id}">${dojo.name}</form:option>
	</c:forEach>
	</form:select><br>
	<form:label path = "firstName">First Name: </form:label>
	<form:input type="text" path="firstName"/><br>
	<form:label path = "lastName">Last Name: </form:label>
	<form:input type="text" path="lastName"/><br>
	<form:label path = "age">Age: </form:label>
	<form:input type="text" path="age"/><br>
	<input type="submit" value="Submit">
	</form:form>
</body>
</html>