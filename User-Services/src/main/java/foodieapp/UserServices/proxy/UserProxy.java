package foodieapp.UserServices.proxy;


import foodieapp.UserServices.domain.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="UserService" , url="localhost:5075")
public interface UserProxy {

    @PostMapping("/api/authService/userRegister")
    public ResponseEntity<?> userRegister (@RequestBody UserDTO userDTO);

    @PostMapping("/api/authService/adminRegister")
    public ResponseEntity<?> adminRegister (@RequestBody UserDTO userDTO);

    @PostMapping("/api/authService/ownerRegister")
    public ResponseEntity<?> registerOwner(@RequestBody UserDTO userDTO);
//    @PostMapping("/api/authService/foodyAdminRegister")
//    public ResponseEntity<?> registerfoodyAdmin(@RequestBody UserDTO userDTO);
}
