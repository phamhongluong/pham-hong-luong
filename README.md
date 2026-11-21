# Trang cá nhân - Phạm Hồng Lượng

Trang giới thiệu ông Phạm Hồng Lượng, Phó Cục trưởng Cục Lâm nghiệp và Kiểm lâm - Bộ Nông nghiệp và Môi trường.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang web hoàn chỉnh, một file duy nhất (HTML, CSS, JS và ảnh chân dung đã nhúng sẵn). Đây là file được xuất bản. |
| `.nojekyll` | Báo GitHub Pages phục vụ file nguyên trạng, không xử lý qua Jekyll. |
| `source/` | Mã nguồn React + TypeScript + Tailwind CSS + shadcn/ui để chỉnh sửa về sau. |

## Xuất bản bằng GitHub Pages

1. Đẩy toàn bộ thư mục này lên một repository trên GitHub.
2. Vào **Settings > Pages**, mục **Source** chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`.
3. Sau 1-2 phút, trang có tại `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

## Chỉnh sửa nội dung

- Toàn bộ chữ (tiếng Việt và tiếng Anh) nằm trong `source/src/content.ts`.
- Giao diện nằm trong `source/src/App.tsx`, màu sắc trong `source/src/index.css`.
- Ảnh chân dung được nhúng dạng base64 trong `source/src/portrait.ts`.

Build lại sau khi sửa (cần Node.js 18+ và pnpm):

```bash
cd source
pnpm install
pnpm add -D parcel @parcel/config-default parcel-resolver-tspaths html-inline
npx parcel build index.html --dist-dir dist --no-source-maps
npx html-inline dist/index.html > bundle.html
python3 postprocess.py      # đưa khai báo UTF-8 lên đầu file
cp dist-index.html ../index.html
```

## Tính năng

- Responsive cho điện thoại, máy tính bảng và máy tính (kiểm thử từ 320 px đến 1920 px).
- Song ngữ Việt - Anh, chế độ sáng/tối, trình duyệt ghi nhớ lựa chọn.
- Form liên hệ kiểm tra dữ liệu phía trình duyệt, sau đó mở ứng dụng email với nội dung điền sẵn (không cần máy chủ).
- Không tải thư viện hay font từ bên ngoài; chạy được cả khi mở trực tiếp file.

---

Phát triển lâm nghiệp bền vững - Vì tương lai xanh Việt Nam
