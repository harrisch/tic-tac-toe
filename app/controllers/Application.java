package controllers;

import play.api.Routes;
import play.mvc.*;

public class Application extends Controller {

    public static Result index() 
    {
        return ok(
            views.html.index.render()
        );
    }
    
    public static Result javascriptRoutes()
    {
        response().setContentType("text/javascript");
        return ok();
    }

}
