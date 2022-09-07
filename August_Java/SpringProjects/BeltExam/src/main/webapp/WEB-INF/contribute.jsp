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
		<h1>add to ${song.title}</h1>
		<a href="/songs">Back to songs</a>
	<form:form action="/process/song/update/${song.id}" modelAttribute="song" method = "PUT">
	<input type="hidden" name="song.user.username" value="${song.user.userName}"/>
	<form:label path = "title">Title: </form:label>
	<form:input type="text" path="title" value="${song.title}"/><form:errors path="title"/><br>
	<form:label path = "genre">Genre: </form:label>
	<form:input type="text" path="genre" value="${song.genre}"/><form:errors path="genre"/><br>
	<form:label path = "lyrics">Add your lyrics: </form:label>
	<form:input type="text" path="lyrics" value="${song.lyrics}"/><form:errors path="lyrics"/><br>
	<form:input type="hidden" path="user" value="${userId}"/>
	<input type="submit" value="Submit">
	</form:form>
	<a href="/songs">cancel</a>
	<a href ="/${song.id}/song/delete">DELETE</a>
</body>
</html>