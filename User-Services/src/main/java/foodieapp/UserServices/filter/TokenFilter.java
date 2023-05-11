package foodieapp.UserServices.filter;

import io.jsonwebtoken.Jwts;

import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class TokenFilter extends GenericFilterBean {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request= (HttpServletRequest) servletRequest;
        HttpServletResponse response= (HttpServletResponse) servletResponse;

        String authHeader=request.getHeader("authorization");

        System.out.println( "AuthHeader "+authHeader);
        System.out.println( "method "+request.getMethod());
        ServletOutputStream servletOutputStream=servletResponse.getOutputStream();
        if (authHeader==null|| !authHeader.startsWith("Bearer ")) {
            //invalid USer
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            servletOutputStream.print("Invalid Token!!!!");
            servletOutputStream.close();
        }
        else
        {
            //valid User
            String jwtToken=authHeader.substring(7);
            System.out.println("Jwt Token"+jwtToken);
            String userName=Jwts.parser().setSigningKey("security_key").parseClaimsJws(jwtToken).getBody().getSubject();
            request.setAttribute("First Name",userName);
            filterChain.doFilter(request,response);
        }


//        if("OPTIONS".equals(request.getMethod())){
//            response.setStatus(HttpServletResponse.SC_OK);
//            filterChain.doFilter(request,response);
//        }else if(authHeader==null || !authHeader.startsWith("Bearer") ){
//            throw new ServletException("Missing or Invalid Exception");
//        }
//        String token=authHeader.substring(7);
//        System.out.println( "token "+token);
//        Claims claims= Jwts.parser().setSigningKey("securityKey").parseClaimsJws(token).getBody();
//        System.out.println("claims in filter "+claims);
//        request.setAttribute("claims",claims);
//        filterChain.doFilter(request,response);
    }


}
