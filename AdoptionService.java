package com.example.demo.Service;

import com.example.demo.Model.Adoption;
import com.example.demo.Repository.AdoptionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdoptionService {

    private final AdoptionRepository repository;

    public AdoptionService(AdoptionRepository repository) {
        this.repository = repository;
    }

    // 1️⃣ Save new adoption
    public Adoption saveAdoption(Adoption adoption) {
        adoption.setStatus("PENDING");
        return repository.save(adoption);
    }

    // 2️⃣ Get adoption by ID
    public Adoption getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));
    }

    // 3️⃣ Admin updates status only
    public Adoption updateStatus(Long id, String status) {
        Adoption adoption = getById(id);
        adoption.setStatus(status);
        return repository.save(adoption);
    }

    // 4️⃣ Admin schedules appointment
    public Adoption save(Adoption adoption) {
        return repository.save(adoption);   // ✅ FIXED
    }

    // 5️⃣ Admin view all
    public List<Adoption> getAll() {
        return repository.findAll();
    }
}
