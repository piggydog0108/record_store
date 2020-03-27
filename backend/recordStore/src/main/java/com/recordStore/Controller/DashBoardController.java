package com.recordStore.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class DashBoardController {
    @PostMapping("/ip")
    public ResponseEntity<String> ip (HttpServletRequest request){
        return ResponseEntity.ok(request.getRemoteAddr());
    }
    @GetMapping("/ip2")
    public ResponseEntity<String> ip2 (HttpServletRequest request){
        return ResponseEntity.ok(request.getRemoteAddr());
    }
}
