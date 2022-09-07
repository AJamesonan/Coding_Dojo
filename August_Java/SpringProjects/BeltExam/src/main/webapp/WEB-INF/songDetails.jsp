<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
 <h1><c:out value="${song.title}"></c:out></h1>

 	<p>(Started by<c:out value="${song.user.userName}"></c:out>)</p>
 	<h3>Genre: <c:out value="${song.genre}"></c:out></h3>
 	<h3>Lyrics:</h3>
 	 <p><c:out value="${song.lyrics}"></c:out></p>
 	 <a href = "/update/song/${song.id}">< Contribute</a>| <a href="/songs">Back</a>
</body>
</html>