<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="" method="POST" >
            <div>
                <label for="userName">
                    Username:
                </label>
                <input type="text" id="userName" name="userName"/>
            </div>
            <div>
                <label for="password">
                    Password:
                </label>
                <input type="text" id="password" name="password"/>
            </div>
            <button type="submit">
                Login
            </button>
        </form>

</body>
</html>