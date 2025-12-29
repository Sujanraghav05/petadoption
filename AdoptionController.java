package com.example.demo.Controller;

import com.example.demo.Model.Adoption;
import com.example.demo.Service.AdoptionService;

import java.util.List;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/adoptions")
@CrossOrigin(origins = "http://localhost:3000")
public class AdoptionController {

    private final AdoptionService service;

    public AdoptionController(AdoptionService service) {
        this.service = service;
    }

    // 1️⃣ Submit adoption form
    @PostMapping
    public Adoption submitAdoption(@RequestBody Adoption adoption) {
        return service.saveAdoption(adoption);
    }

    // 2️⃣ Thank you + status page
    @GetMapping("/{id}")
    public Adoption getStatus(@PathVariable Long id) {
        return service.getById(id);
    }

    // 3️⃣ Admin updates status
    @PutMapping("/{id}/status")
    public Adoption updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {
        return service.updateStatus(id, status);
    }

    // 4️⃣ Admin dashboard list
    @GetMapping
    public List<Adoption> getAllAdoptions() {
        return service.getAll();
    }
    @PutMapping("/{id}/schedule")
    public Adoption scheduleAppointment(
            @PathVariable Long id,
            @RequestParam String date,
            @RequestParam String time) {

        Adoption adoption = service.getById(id);
        adoption.setAppointmentDate(date);
        adoption.setAppointmentTime(time);
        adoption.setStatus("APPROVED");

        return service.save(adoption);
    }

}
