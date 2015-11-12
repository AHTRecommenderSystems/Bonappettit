<%-- 
    Document   : index
    Created on : 11/11/2015, 10:58:40 PM
    Author     : tono
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Sistema Recomendador de Comidas</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
  

    <!-- Custom CSS -->
    <link href="css/scrolling-nav.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<!-- The #page-top ID is part of the scrolling feature - the data-spy and data-target are part of the built-in Bootstrap scrollspy function -->

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">Sistema Recomendador de Comida</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    
                   <li>
                        <a class="page-scroll" href="./index.jsp">Menu Principal</a>
                    </li>
                    <li class="dropdown">
                          <a href="about.jsp" class="dropdown-toggle" data-toggle="dropdown">Platillo<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="./form_add_dishes.jsp">Agregrar Un Platillo</a></li>
                                  
                            </ul>

                        </li>
                    <li class="dropdown">
                          <a href="about.jsp" class="dropdown-toggle" data-toggle="dropdown">Recomendaciones <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="./searcher_for_dishes.jsp">Platillo</a></li>
                                  <li class="divider"></li>
                                  <li><a href="./test.jsp">Categoria</a></li>
                                  
                            </ul>

                        </li>
                </ul>
                 
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Intro Section -->
    
        <div class="container">
            
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
              <h3>Platillos Más Relevantes</h3>             
                <hr>
                <br>
                <div class="row">
                  
            <div class="col-md-7">
                <a href="#">
                    <img class="img-responsive" src="http://placehold.it/400x200" alt="" style="padding-left: 100px;">
                </a>
            </div>
            <div class="col-md-5">
                <h3>Name Fristh dish</h3>
                <h4>Ingredientes</h4>
                <p>All the ingredientes.</p>
                <h4>Categories</h4>
                <p>Dish category's</p>
            </div>
        </div>
                <hr>
                <br>
                <div class="row">
            <div class="col-md-7">
                <a href="#">
                    <img class="img-responsive" src="http://placehold.it/400x200" alt="" style="padding-left: 100px;">
                </a>
            </div>
            <div class="col-md-5">
                <h3>Name Second dish</h3>
                <h4>Ingredientes</h4>
                <p>All the ingredientes.</p>
                <h4>Categories</h4>
                <p>Dish category's</p>
            </div>
        </div>
                <hr>
                <br>
                <div class="row">
            <div class="col-md-7">
                <a href="#">
                    <img class="img-responsive" src="http://placehold.it/400x200" alt="" style="padding-left: 100px;">
                </a>
            </div>
            <div class="col-md-5">
                <h3>Name  third dish</h3>
                <h4>Ingredientes</h4>
                <p>All the ingredientes.</p>
                <h4>Categories</h4>
                <p>Dish category's</p>
            </div>
                    </div>
                    <hr>
                    <br>
        
        <div class="row">
            <div class="col-md-7">
                <a href="#">
                    <img class="img-responsive" src="http://placehold.it/400x200" alt="" style="padding-left: 100px;">
                </a>
            </div>
            <div class="col-md-5">
                <h3>Name  fourth dish</h3>
                <h4>Ingredientes</h4>
                <p>All the ingredientes.</p>
                <h4>Categories</h4>
                <p>Dish category's</p>
            </div>
        </div>    
                     <hr>
                    <br>
        
        <div class="row">
            <div class="col-md-7">
                <a href="#">
                    <img class="img-responsive" src="http://placehold.it/400x200" alt="" style="padding-left: 100px;">
                </a>
            </div>
            <div class="col-md-5">
                <h3>Name  fifth dish</h3>
                <h4>Ingredientes</h4>
                <p>All the ingredientes.</p>
                <h4>Categories</h4>
                <p>Dish category's</p>
            </div>
        </div>    
     
        </div>      
    


    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Scrolling Nav JavaScript -->
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/scrolling-nav.js"></script>

</body>

</html>

