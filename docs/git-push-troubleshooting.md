# 📌 Lưu ý: Xử lý lỗi Git Push lên GitLab

> **Cập nhật lần cuối:** 2026-02-27

---

## ❌ Lỗi thường gặp

```
Connection to gitlab.com closed by remote host.
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly
```

---

## 🔍 Nguyên nhân

| Nguyên nhân | Giải thích |
|-------------|------------|
| **Remote out of sync** | Local repo và remote bị lệch nhau — remote branch đã bị thay đổi/xóa trên server mà local chưa biết |
| **Git gửi quá nhiều objects** | Do chưa `fetch`, git phải gửi toàn bộ history (809 objects) thay vì chỉ gửi diff |
| **Kết nối bị timeout** | GitLab đóng kết nối khi nhận lượng dữ liệu quá lớn |

---

## ✅ Giải pháp (theo thứ tự ưu tiên)

### 1. Luôn `fetch` trước khi `push` ⭐ (Quan trọng nhất)

```bash
git fetch origin
git push origin <tên-branch>
```

> Đây là bước quan trọng nhất! Luôn làm điều này khi bị lỗi disconnect.

---

### 2. Tăng buffer size và timeout cho HTTP

```bash
git config --global http.postBuffer 1073741824    # 1GB buffer
git config --global http.lowSpeedLimit 0          # Không giới hạn tốc độ tối thiểu
git config --global http.lowSpeedTime 999999      # Timeout rất dài
```

---

### 3. Dọn dẹp git objects (nếu .git/ quá nặng)

```bash
git gc --aggressive --prune=now
```

> Dùng khi `.git/` folder nặng > 50MB, giúp nén lại các loose objects.

---

### 4. Dùng SSH qua port 443 (nếu port 22 bị chặn)

```bash
# Kiểm tra kết nối SSH qua port 443
ssh -T -p 443 git@altssh.gitlab.com

# Nếu thành công, đổi remote URL
git remote set-url origin ssh://git@altssh.gitlab.com:443/daihung.dev/3d_archtech_studio.git

# Sau đó push bình thường
git push origin <tên-branch>
```

---

### 5. Push với `--no-thin` flag

```bash
git push origin <tên-branch> --no-thin
```

> Tắt tối ưu hoá "thin pack" của git — đôi khi giúp tránh lỗi disconnect.

---

## 🔁 Quy trình chuẩn khi push

```bash
# Bước 1: Đồng bộ remote
git fetch origin

# Bước 2: Push lên branch của mình
git push origin feature/<tên-branch>

# Nếu bị lỗi rejected (stale), dùng:
git push origin feature/<tên-branch> --force-with-lease
```

---

## 📝 Kiểm tra SSH key

```bash
# Xem SSH key hiện có
cat ~/.ssh/id_ed25519.pub

# Kiểm tra kết nối với GitLab
ssh -T git@gitlab.com
```

---

## ⚠️ Lưu ý quan trọng

- **Không dùng `--force`** trừ khi thực sự cần thiết, thay bằng `--force-with-lease` để an toàn hơn.
- Luôn kiểm tra `git remote -v` để xác nhận remote URL đang dùng SSH hay HTTPS.
- Nếu đổi remote URL, nhớ đổi lại sau khi xong: `git remote set-url origin git@gitlab.com:daihung.dev/3d_archtech_studio.git`
