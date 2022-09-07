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
 <h1><c:out value="${book.title}"></c:out></h1>
 	<a href="/books">Back to Shelf</a>
 	<p><c:out value="${book.user.userName}"></c:out> read <c:out value="${book.title}"></c:out>
 	 by <c:out value="${book.author}"></c:out></p>
 	<p>Here are <c:out value="${book.user.userName}"></c:out>'s thoughts:</p>
 	<p> <c:out value="${book.userThoughts}"></c:out></p>
</body>
</html>