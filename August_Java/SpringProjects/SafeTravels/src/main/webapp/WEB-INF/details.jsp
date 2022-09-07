<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Expense Details</title>
</head>
<body>
<h1>Expense Details</h1>
<a href="/">Go Back</a>
<p>Expense Name: <c:out value="${expense.name }"/> </p>
<p>Description: <c:out value="${expense.description }"/></p>
<p>Vendor: <c:out value="${expense.vendor}"/></p>
<p>Amount Spent: $<c:out value="${expense.amount }"/></p>
</body>
</html>