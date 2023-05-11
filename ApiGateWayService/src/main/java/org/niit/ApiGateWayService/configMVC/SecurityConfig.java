//package org.niit.ApiGateWayService.configMVC;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.CorsConfigurer;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.Arrays;
//import java.util.List;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    InMemoryUserDetailsManager user (){
//        return new InMemoryUserDetailsManager(
//                User.withUsername("Rohit45")
//                        .password("{noop}password")
//                        .roles("User")
//                        .build()
//        );
//    }
//
//    @Bean
//    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        return http
//                .cors(Customizer.withDefaults()) // by default use a bean by the name of coreConfig
//                .authorizeRequests(auth->auth
//                        .anyRequest().authenticated())
//
//                .httpBasic(Customizer.withDefaults()).build();
//    }
//
//
//@Bean
//    CorsConfigurationSource corsConfigurationSource(){
//    CorsConfiguration core = new CorsConfiguration();  //obj
//    core.setAllowedOrigins(Arrays.asList("http://localhost:4200/sign-up"));
//    core.setAllowedMethods(Arrays.asList("*"));
//    core.setAllowedHeaders(List.of("Authorization"));
//    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//    source.registerCorsConfiguration("/**", core);
//    return source;
//}
//
//
//}
//
