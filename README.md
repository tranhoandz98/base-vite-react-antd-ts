# Base react + vite + antd + pwa + typescript

# base-vite-react-antd-ts

This is a base template for a React project using Vite, PWA, Ant Design, and TypeScript.

## Features

Dự án dựa trên một số thư viện cần thiết sau:
## Dependencies

1. [@ant-design/icons](https://ant.design/components/icon/): Cung cấp một bộ sưu tập nguồn mở gồm hơn 500 biểu tượng của Ant Design.
2. [@ant-design/pro-components](https://procomponents.ant.design/): Tập hợp các thành phần của Ant Design dành cho doanh nghiệp, đi kèm bảng, biểu đồ, biểu mẫu, bố cục và nhiều hơn nữa.
3. [@hookform/resolvers](https://react-hook-form.com/resolvers/): Là kho chính thức của các thư viện kiểm tra biểu mẫu, được sử dụng để tích hợp với React Hook Form.
4. [@tanstack/react-query](https://react-query.tanstack.com/): Thư viện tổng quát cho việc tìm nạp, đồng bộ hóa, lưu cache và cập nhật trạng thái dữ liệu phía máy khách.
5. [@tanstack/react-query-devtools](https://react-query.tanstack.com/devtools): Công cụ phát triển liên quan đến thư viện react-query.
6. [antd](https://ant.design/): Thư viện của các thành phần nguyên tử nổi tiếng của Ant Design.
7. [axios](https://axios-http.com/): Thư viện khá phổ biến để thực hiện các yêu cầu HTTP.
8. [country-flag-icons](https://github.com/catamphetamine/country-flag-icons): Thư viện cung cấp các biểu tượng cờ quốc gia.
9. [i18next](https://www.i18next.com/): Thư viện phổ biến cho việc đa ngôn ngữ trong javascript.
10. [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector): Plugin cho i18next thực hiện việc phát hiện ngôn ngữ của trình duyệt.
11. [lodash](https://lodash.com/): Thư viện hỗ trợ JavaScript cung cấp hàm tiện ích cho việc lập trình chức năng và phục vụ FP.
12. [mockjs](http://mockjs.com/): Thư viện giúp tạo dữ liệu mô phỏng dùng cho việc kiểm thử.
13. [query-string](https://github.com/sindresorhus/query-string): Thư viện giúp làm việc với chuỗi query của URL dễ dàng hơn.
14. [react](https://reactjs.org/): Thư viện JavaScript được Facebook sử dụng để xây dựng giao diện người dùng.
15. [react-dom](https://reactjs.org/): Thư viện công cụ phục vụ việc tương tác với DOM trong ứng dụng React.
16. [react-hook-form](https://react-hook-form.com/): Thư viện cung cấp các hàm tiện ích để xử lý các biểu mẫu trong React.
17. [react-i18next](https://react.i18next.com/): Mô-đun để tích hợp i18next với React.
18. [react-icons](https://react-icons.github.io/react-icons): Thư viện bao gồm các biểu tượng icon từ nhiều thư viện khác nhau như font awesome, ant design để sử dụng trong dự án React.
19. [react-router-dom](https://reactrouter.com/web/guides/quick-start): Thư viện điều hướng cho ứng dụng web đơn trang (SPA) sử dụng React.
20. [yup](https://github.com/jquense/yup): Thư viện giúp tạo ra các schema để kiểm tra dữ liệu.
21. [dayjs](https://day.js.org/): Đây là một thư viện JavaScript tối giản dành cho các trình duyệt hiện đại với API tương thích với Moment.js. Nếu bạn sử dụng Moment.js, bạn đã biết cách sử dụng Day.js. Kích thước chỉ 2KB (đã được nén) nhưng có một loạt các tính năng rộng lớn cho việc phân tích, xác thực, thao tác và hiển thị ngày và thời gian.
22. [react-toastify](https://www.npmjs.com/package/react-toastify): Là một thư viện React giúp bạn tạo ra các thông báo toast một cách dễ dàng và tiện lợi. Thư viện hỗ trợ nhiều tùy chọn để tùy chỉnh thông báo toast và cung cấp API dễ sử dụng, giúp bạn xây dựng trải nghiệm người dùng mượt mà.
## DevDependencies
1. [@types/dompurify](https://www.npmjs.com/package/@types/dompurify): Cung cấp các định nghĩa kiểu TypeScript cho thư viện DOMPurify.
2. [@types/lodash](https://www.npmjs.com/package/@types/lodash): Cung cấp định nghĩa kiểu TypeScript cho thư viện Lodash.
3. [@types/node](https://www.npmjs.com/package/@types/node): Định nghĩa kiểu TypeScript cho Node.js.
4. [@types/react](https://www.npmjs.com/package/@types/react): Định nghĩa kiểu TypeScript cho thư viện React.
5. [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): Cung cấp các định nghĩa kiểu TypeScript cho thư viện ReactDOM.
6. [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint): Plugin eslint cho TypeScript.
7. [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint): Parser ESLint cho TypeScript.
8. [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react): Plugin hỗ trợ cấu hình Vite cho React.
9. [autoprefixer](https://github.com/postcss/autoprefixer): Chỉnh sửa CSS của bạn (thêm các tiền tố của nhà cung cấp) để nó hoạt động trên những trình duyệt cũ.
10. [clsx](https://github.com/lukeed/clsx): Thư viện nhỏ để kết hợp className.
11. [eslint](https://eslint.org/): Linter JavaScript mở rộng được sử dụng để tìm và sửa các vấn đề trong mã JavaScript của bạn.
12. [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Tắt tất cả các quy tắc ESLint không tương thích với Prettier.
13. [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): Chạy Prettier như một quy tắc ESLint và báo cáo các khác biệt như những vi phạm eslint.
14. [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): Quy tắc ESLint để áp dụng quy tắc Hooks của React. 
15. [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): Một plugin ESLint để tích hợp React Fast Refresh vào ESLint.
16. [postcss](https://postcss.org): Một công cụ chuyển đổi CSS bằng JavaScript. 
17. [prettier](https://prettier.io/): Công cụ format mã nguồn để mã của bạn luôn đồng nhất.
18. [pwa-asset-generator](https://www.npmjs.com/package/pwa-asset-generator): Công cụ tự động tạo tài sản PWA.
19. [tailwindcss](https://tailwindcss.com/): Một thư viện CSS giúp xây dựng giao diện người dùng tùy chỉnh với ít công sức.
20. [tailwindcss-debug-screens](https://www.npmjs.com/package/tailwindcss-debug-screens): Plugin hiển thị tên class screen hiện tại trên giao diện khi debug.
21. [typescript](https://www.typescriptlang.org/): Một tập hợp các loại tĩnh cho JavaScript để giúp việc phát triển trở nên dễ dàng hơn.
22. [vite](https://vitejs.dev/): Một công cụ xây dựng theo tiêu chí hiệu năng cao và hỗ trợ tính năng phát triển như hot module replacement.
23. [vite-plugin-pwa](https://www.npmjs.com/package/vite-plugin-pwa): Plugin hỗ trợ PWA cho Vite.
24. [workbox-window](https://developers.google.com/web/tools/workbox/modules/workbox-window): Thư viện với các API hỗ trợ xây dựng PWA trong web.


## Scripts
- `yarn dev`: Chạy server phát triển.
- `yarn build`: Xây dựng ứng dụng cho sản xuất.
- `yarn lint`: Kiểm tra lỗi lập trình không mong muốn hoặc cấu trúc code không đúng.
- `yarn prettier`: Kiểm tra sự khớp nhau của code.
- `yarn preview`: Hiển thị trước ứng dụng sau khi đã xây dựng.
- `yarn pwa-gen-img`: Sinh ảnh cho PWA.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) (>18 || 20.11.1) and [Yarn](https://yarnpkg.com) installed on your machine.

### Installation

Clone the repository:

```bash
git clone https://github.com/tranhoandz98/base-vite-react-antd-ts.git