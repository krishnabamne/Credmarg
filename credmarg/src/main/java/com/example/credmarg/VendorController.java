package com.example.credmarg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vendors")
public class VendorController {
    @Autowired
    private VendorService vendorService;

    @PostMapping
    public Vendor createVendor(@RequestBody Vendor vendor) {
        return vendorService.createVendor(vendor);
    }

    @GetMapping
    public List<Vendor> getAllVendors() {
        return vendorService.getAllVendors();
    }

    @PostMapping("/send-email")
    public void sendEmailToVendor(@RequestBody String emailContent) {
        vendorService.sendEmailToVendor(emailContent);
    }

    @GetMapping("/emails")
    public List<EmailLog> getAllEmails() {
        return vendorService.getAllEmails();
    }
}
