import { pool } from "../services/mysql.js";

export const employeeRepo = {
  // Lấy tất cả nhân viên
  getEmployees: async () => {
    const db = await pool;
    const [rows] = await db.query("SELECT * FROM NHANVIEN");
    return rows;
  },

  // Lấy nhân viên theo mã
  getEmployeeById: async (id) => {
    const db = await pool;
    const [rows] = await db.query(
      "SELECT * FROM NHANVIEN WHERE MaNV = ?",
      [id]
    );
    return rows[0] || null;
  },

  // Thêm nhân viên
  createEmployee: async (data) => {
    const db = await pool;
    const sql = `
      INSERT INTO NHANVIEN (MaNV, HoTen, GioiTinh, NgaySinh, Email, SDT)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [
      data.MaNV,
      data.HoTen,
      data.GioiTinh,
      data.NgaySinh,
      data.Email,
      data.SDT || ""
    ];
    const [result] = await db.query(sql, params);
    return result;
  },

  // Cập nhật nhân viên
  updateEmployee: async (id, data) => {
    const db = await pool;
    const sql = `
      UPDATE NHANVIEN
      SET HoTen = ?, GioiTinh = ?, NgaySinh = ?, Email = ?, SDT = ?
      WHERE MaNV = ?
    `;
    const params = [
      data.HoTen,
      data.GioiTinh,
      data.NgaySinh,
      data.Email,
      data.SDT || "",
      id
    ];
    const [result] = await db.query(sql, params);
    return result;
  },

  // Xóa nhân viên
  deleteEmployee: async (id) => {
    const db = await pool;
    const [result] = await db.query(
      "DELETE FROM NHANVIEN WHERE MaNV = ?",
      [id]
    );
    return result;
  }
};
