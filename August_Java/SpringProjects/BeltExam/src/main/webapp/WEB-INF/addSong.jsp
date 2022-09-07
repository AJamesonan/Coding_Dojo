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
		<h1>New Song</h1>
		<a href="/songs">Back to songs</a>
	<form:form action="/process/new/song" method="POST" modelAttribute="song">
	<form:label path = "title">Title: </form:label>
	<form:input type="text" path="title"/><form:errors path="title"/><br>
	<form:label path = "genre">Genre: </form:label>
	<form:input type="text" path="genre"/><form:errors path="genre"/><br>
	<form:label path = "lyrics">Add your lyrics: </form:label>
	<form:input type="text" path="lyrics"/><form:errors path="lyrics"/><br>
	<form:input type="hidden" path="user" value="${userId}"/>
	<input type="submit" value="Submit">
	</form:form>
	<a href="/songs">cancel</a>
</body>
</html>