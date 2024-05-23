package com.example.credmarg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendorService {
    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private EmailLogRepository emailLogRepository;

    public Vendor createVendor(Vendor vendor) {
        return vendorRepository.save(vendor);
    }

    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }

    public Vendor getVendorByEmail(String email) {
        return vendorRepository.findByEmail(email);
    }

    public void sendEmailToVendor(String emailContent) {
        // Mock email sending by logging to EmailLog
        EmailLog emailLog = new EmailLog();
        emailLog.setContent(emailContent);
        emailLogRepository.save(emailLog);

        // Print email content to console
        System.out.println(emailContent);
    }

    public List<EmailLog> getAllEmails() {
        return emailLogRepository.findAll();
    }
}
