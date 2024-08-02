package com.matiasfs.usercrudlogin.User.service;

import java.util.List;

import com.matiasfs.usercrudlogin.User.Entity.User;

public interface IUserService {
    public List<User> findAll();
    public User findById(int id);
    public User update(int id, User user);
    public User save(User user);
    public void delete(int id);
    public User findByUsername(String username);
    public User findByEmail(String email);
    public User changePassword(String username, String oldPassword, String newPassword);
}
