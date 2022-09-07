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
		<h1>New Book</h1>
		<a href="/">Back to shelf</a>
	<form:form action="/process/new/book" method="POST" modelAttribute="book">
	<form:label path = "title">Title: </form:label>
	<form:input type="text" path="title"/><br>
	<form:label path = "Author">Author: </form:label>
	<form:input type="text" path="author"/><br>
	<form:label path = "userThoughts">My thoughts: </form:label>
	<form:input type="text" path="userThoughts"/><br>
	<form:input type="hidden" path="user" value="${userId}"/>
	<input type="submit" value="Submit">
	</form:form>
</body>
</html>