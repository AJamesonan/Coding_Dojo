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
<p>Hello, <c:out value="${user.userName}"></c:out></p>	
<a href="/logout"> Log out</a><br>
	<h>All songs</h>
	
	<table>
		<tr>
			<th>Song |</th>
			<th>| # of Collaborations</th>
		</tr>
		<c:forEach var="song" items="${songs}">
		<tr>
			<td>
				<div><a href = "/song/${song.id}"><c:out value="${song.title}"></c:out></a></div>
				<div>Genre: <c:out value="${song.genre}"></c:out></div>
			</td>
			<td style="display: flex; justify-content: center; "><c:out value="${song.contributions}"></c:out></td>
		</tr>
		 </c:forEach>
	</table>
	
	<a href="/add/song"> < new song</a>
</body>
</html>