html,body{
  width: 100%;
  height: 100%;
}

.search-form{
   display: flex;
   justify-content: center;
   align-content: center;
   height:100%;
   width:100%;
 }
    
.search-div{ 
    display: inline-flex;
    border: 1px solid black;
    padding: 10px;
}    

.search-input{
   width: 100%;
   border: 0px;
 }
 
 input:focus, textarea:focus, select:focus{
   outline: none;
 }
 form{
  height: fit-content;
  width: 60%
 }
 
 

<html>
<head>
  <title>Search with Speech</title>
  <link href="https://fonts.googleapis.com/css2?family=Lexend+Zetta&family=Mukta&display=swap" rel="stylesheet">
  <link rel = "stylesheet" href = "styles.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css">
</head>
<body>
<div class="search-form">
<form>
<div class="search-div">
<input class="search-input" type = "text" name = "q" placeholder= "Search Google ...." autocomplete="off" autofocus>
      <i class = "fa fa-microphone" style = "color:black"></i>
    </input>
</div>
</form>
</div>
</body>
</html>





