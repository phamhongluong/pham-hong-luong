export type Lang = "vi" | "en";

export const DECREE_URL =
  "https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/5/180-ndcp.signed.pdf";
export const HANDBOOK_URL =
  "https://vnforest.gov.vn/wp-content/uploads/2025/02/Handbook-cac-bon-rung_Ver-7.pdf";
export const SECTOR_REPORT_URL =
  "https://vnforest.gov.vn/wp-content/uploads/2026/09/20260928-Forestry-Sector-Report-2025-web-VN.pdf";
export const CIRCULAR43_URL = "https://vanban.chinhphu.vn/?pageid=27160&docid=219743";
export const CIRCULAR31_URL = "https://mae.gov.vn/Pages/chitietvanban.aspx?ItemID=857";
export const EMAIL = "luong.mard@gmail.com";
export const FACEBOOK = "https://www.facebook.com/share/1FSucNWyWj/?mibextid=wwXIfr";
export const AGENCY_URL = "https://vnforest.gov.vn";

export type SkillKey = "finance" | "pfes" | "carbon" | "biodiversity" | "law" | "digital";

export const content = {
  vi: {
    agency: "Cục Lâm nghiệp và Kiểm lâm - Bộ Nông nghiệp và Môi trường",
    nav: { about: "Giới thiệu", expertise: "Chuyên môn", projects: "Dự án", experience: "Kinh nghiệm", contact: "Liên hệ" },
    a11y: {
      lang: "Chuyển sang tiếng Anh",
      theme: "Chuyển chế độ sáng/tối",
      menu: "Mở menu điều hướng",
      close: "Đóng menu",
      top: "Lên đầu trang",
      portrait: "Ảnh chân dung ông Phạm Hồng Lượng tại phòng làm việc",
    },
    langShort: "EN",
    hero: {
      eyebrow: "Chính sách lâm nghiệp - Tài chính - Các-bon rừng",
      role: "Phó Cục trưởng Cục Lâm nghiệp và Kiểm lâm",
      ministry: "Bộ Nông nghiệp và Môi trường",
      intro:
        "Hơn 20 năm quản lý tài chính công trong ngành nông nghiệp và môi trường. Hiện tập trung vào thị trường tín chỉ các-bon rừng, khoa học công nghệ, chuyển đổi số và ứng dụng AI trong quản lý nhà nước về lâm nghiệp.",
      ctaContact: "Liên hệ",
      ctaProjects: "Xem dự án",
      facts: [
        { big: "20+", small: "năm quản lý tài chính công" },
        { big: "PFES", small: "xây dựng và vận hành chính sách chi trả DVMTR" },
        { big: "NĐ 180", small: "khung pháp lý dịch vụ các-bon rừng" },
      ],
      badgeTop: "Giám đốc VQG Cát Tiên",
      badgeBottom: "2018 - 2021",
    },
    about: {
      eyebrow: "Giới thiệu",
      title: "Tài chính công cho rừng và người giữ rừng",
      p1:
        "Tôi làm quản lý tài chính công trong ngành nông nghiệp và môi trường hơn 20 năm, chủ yếu ở ba mảng: quản lý tài chính các chương trình, dự án ODA; xây dựng và tổ chức thực hiện chính sách chi trả dịch vụ môi trường rừng (PFES), trong đó có dịch vụ hấp thụ và lưu giữ các-bon rừng; và công tác kế hoạch, quy hoạch, chiến lược phát triển ngành lâm nghiệp.",
      p2:
        "Hiện tôi tập trung vào thị trường tín chỉ các-bon rừng, khoa học công nghệ, chuyển đổi số và ứng dụng AI trong quản lý nhà nước về lâm nghiệp.",
      eduTitle: "Học vấn",
      edu: ["Kỹ sư Lâm nghiệp", "Cử nhân Tài chính", "Thạc sỹ Quản trị kinh doanh quốc tế (IEMBA)"],
    },
    expertise: {
      eyebrow: "Chuyên môn",
      title: "Lĩnh vực chuyên sâu",
      intro: "Sáu lĩnh vực gắn với công việc hằng ngày, từ hoạch định chính sách đến triển khai tại hiện trường.",
      items: [
        { key: "finance", title: "Tài chính lâm nghiệp và ODA", desc: "Kế hoạch - tài chính ngành, quản lý nguồn vốn ODA và vốn vay ưu đãi.", tags: ["Tài chính công", "ODA", "Kế hoạch ngành"] },
        { key: "pfes", title: "Chính sách chi trả DVMTR", desc: "Xây dựng và tổ chức thực hiện chính sách chi trả dịch vụ môi trường rừng.", tags: ["PFES", "Quỹ BV&PTR"] },
        { key: "carbon", title: "Thị trường các-bon rừng", desc: "Cơ chế tín chỉ các-bon rừng; đo đạc, báo cáo và thẩm định.", tags: ["REDD+", "Điều 6.4", "MRV"] },
        { key: "biodiversity", title: "Bảo tồn đa dạng sinh học", desc: "Quản lý Vườn quốc gia, khu bảo tồn và hệ sinh thái rừng.", tags: ["Vườn quốc gia", "Khu bảo tồn"] },
        { key: "law", title: "Pháp luật và hợp tác quốc tế", desc: "Xây dựng văn bản quy phạm pháp luật; làm việc với các đối tác phát triển.", tags: ["VBQPPL", "GEF", "GCF", "UNDP", "WB"] },
        { key: "digital", title: "KHCN, chuyển đổi số và AI", desc: "Đổi mới sáng tạo, chuyển đổi số, ứng dụng AI trong công sở và truyền thông.", tags: ["Chuyển đổi số", "AI công sở", "Truyền thông"] },
      ] as { key: SkillKey; title: string; desc: string; tags: string[] }[],
    },
    projects: {
      eyebrow: "Dự án tiêu biểu",
      title: "Sản phẩm nổi bật",
      intro: "Văn bản, tài liệu và công cụ đã tham gia xây dựng và đưa vào sử dụng.",
      featuredLabel: "Văn bản pháp lý",
      featured: {
        title: "Khung pháp lý dịch vụ hấp thụ và lưu giữ các-bon rừng",
        desc: "Tham gia xây dựng Nghị định số 180/2026/NĐ-CP và Thông tư số 31/2026/TT-BNNMT, hai văn bản đặt nền cho dịch vụ hấp thụ và lưu giữ các-bon rừng.",
        docs: ["Nghị định số 180/2026/NĐ-CP", "Thông tư số 31/2026/TT-BNNMT"],
        link: "Xem Nghị định 180/2026/NĐ-CP (PDF)",
      },
      data: {
        tag: "Dữ liệu lâm nghiệp",
        title: "Kiến trúc dữ liệu, khung quản trị và từ điển dữ liệu lĩnh vực lâm nghiệp",
        desc: "Thông tư số 43/2026/TT-BNNMT ngày 30/9/2026 của Bộ Nông nghiệp và Môi trường quy định kiến trúc dữ liệu, khung quản trị, quản lý dữ liệu và từ điển dữ liệu lĩnh vực lâm nghiệp; có hiệu lực từ ngày 20/11/2026.",
        doc: "Thông tư số 43/2026/TT-BNNMT",
        link: "Xem Thông tư 43/2026/TT-BNNMT",
      },
      items: [
        { tag: "Sổ tay hỏi đáp", title: "Giải mã các hiểu lầm về các-bon rừng và dự án các-bon rừng", desc: "Sổ tay hỏi đáp giải thích những hiểu lầm thường gặp về các-bon rừng và dự án các-bon rừng, dành cho nhà đầu tư, chủ rừng và các bên liên quan.", link: "handbook" },
        { tag: "Đào tạo", title: "Bộ tài liệu tập huấn ứng dụng AI cho cán bộ ngành lâm nghiệp", desc: "Sổ tay hướng dẫn từ A đến Z về Claude, ChatGPT, Google Gemini, NotebookLM kèm bài trình bày.", link: "" },
        { tag: "Báo cáo ngành", title: "Báo cáo kết quả hoạt động của ngành lâm nghiệp năm 2025", desc: "Báo cáo tổng hợp kết quả hoạt động của ngành lâm nghiệp năm 2025, công bố trên Cổng thông tin của Cục.", link: "report" },
        { tag: "Quản trị số", title: "Hệ thống đánh giá KPI công chức và dashboard chuyên ngành", desc: "Đánh giá KPI công chức theo Nghị định 335/2025/NĐ-CP và các dashboard báo cáo số liệu chuyên ngành.", link: "" },
      ],
      more: "Xem chi tiết",
      pdf: "Xem sổ tay (PDF)",
      report: "Xem báo cáo (PDF)",
    },
    experience: {
      eyebrow: "Kinh nghiệm",
      title: "Quá trình công tác",
      intro: "Từ vận hành quỹ, quản lý rừng đặc dụng đến hoạch định chính sách cấp quốc gia.",
      items: [
        { time: "Hiện nay", title: "Phó Cục trưởng", org: "Cục Lâm nghiệp và Kiểm lâm - Bộ Nông nghiệp và Môi trường", desc: "Kế hoạch - tài chính, chi trả DVMTR, thị trường các-bon rừng, khoa học công nghệ và chuyển đổi số." },
        { time: "2018 - 2021", title: "Giám đốc", org: "Vườn quốc gia Cát Tiên", desc: "Quản lý, bảo vệ rừng và bảo tồn đa dạng sinh học tại Vườn quốc gia." },
        { time: "2011 - 2016", title: "Thiết lập và vận hành", org: "Quỹ Bảo vệ và Phát triển rừng", desc: "Xây dựng bộ máy và vận hành Quỹ gắn với chính sách chi trả dịch vụ môi trường rừng." },
      ],
      current: "Hiện tại",
    },
    slogan: "Phát triển lâm nghiệp bền vững - Vì tương lai xanh Việt Nam",
    contact: {
      eyebrow: "Liên hệ",
      title: "Trao đổi và hợp tác",
      intro: "Về chính sách lâm nghiệp, các-bon rừng, hợp tác quốc tế hoặc chia sẻ chuyên môn, xin gửi thư theo các kênh dưới đây.",
      emailLabel: "Email",
      fbLabel: "Facebook",
      agencyLabel: "Website cơ quan",
      form: {
        title: "Gửi lời nhắn",
        name: "Họ và tên",
        email: "Email",
        message: "Nội dung",
        phName: "Nguyễn Văn A",
        phEmail: "ten@coquan.gov.vn",
        phMessage: "Nội dung cần trao đổi...",
        required: "Các trường có dấu * là bắt buộc",
        submit: "Gửi lời nhắn",
        errName: "Vui lòng nhập họ và tên (ít nhất 2 ký tự).",
        errEmailEmpty: "Vui lòng nhập email.",
        errEmailBad: "Email chưa đúng định dạng.",
        errMessage: "Vui lòng nhập nội dung (ít nhất 10 ký tự).",
        okTitle: "Thông tin đã hợp lệ",
        okText: "Bấm nút dưới đây để mở ứng dụng email với nội dung đã điền sẵn, rồi gửi đi.",
        openMail: "Mở ứng dụng email",
        again: "Soạn lời nhắn khác",
        subject: "Liên hệ từ trang cá nhân",
        bodyName: "Họ và tên",
      },
    },
    footer: { rights: "Bảo lưu mọi quyền.", top: "Lên đầu trang", nav: "Liên kết chân trang" },
  },
  en: {
    agency: "Viet Nam Forestry Administration, Ministry of Agriculture and Environment of Viet Nam",
    nav: { about: "About", expertise: "Expertise", projects: "Projects", experience: "Experience", contact: "Contact" },
    a11y: {
      lang: "Switch to Vietnamese",
      theme: "Toggle light/dark mode",
      menu: "Open navigation menu",
      close: "Close menu",
      top: "Back to top",
      portrait: "Portrait of Mr. Pham Hong Luong at his office",
    },
    langShort: "VI",
    hero: {
      eyebrow: "Forestry policy - Finance - Forest carbon",
      role: "Deputy Director General, Viet Nam Forestry Administration",
      ministry: "Ministry of Agriculture and Environment of Viet Nam",
      intro:
        "Over 20 years in public financial management in the agriculture and environment sector. Now focused on forest carbon credit markets, science and technology, digital transformation and AI in state forestry management.",
      ctaContact: "Contact",
      ctaProjects: "View projects",
      facts: [
        { big: "20+", small: "years in public financial management" },
        { big: "PFES", small: "designing and running forest environmental services payments" },
        { big: "Decree 180", small: "legal framework for forest carbon services" },
      ],
      badgeTop: "Director, Cat Tien National Park",
      badgeBottom: "2018 - 2021",
    },
    about: {
      eyebrow: "About",
      title: "Public finance for forests and the people who protect them",
      p1:
        "I have worked in public financial management in the agriculture and environment sector for over 20 years, mainly in three areas: financial management of ODA programmes and projects; designing and implementing Payment for Forest Environmental Services (PFES), including forest carbon sequestration and storage services; and forestry sector planning and development strategy.",
      p2:
        "My current focus is forest carbon credit markets, science and technology, digital transformation and the use of AI in state forestry management.",
      eduTitle: "Education",
      edu: ["Forestry Engineer", "Bachelor of Finance", "International Executive MBA (IEMBA)"],
    },
    expertise: {
      eyebrow: "Expertise",
      title: "Areas of specialisation",
      intro: "Six areas that run through my daily work, from policy design to implementation in the field.",
      items: [
        { key: "finance", title: "Forestry finance and ODA", desc: "Sector planning and finance; management of ODA and concessional loans.", tags: ["Public finance", "ODA", "Sector planning"] },
        { key: "pfes", title: "PFES policy", desc: "Design and implementation of Payment for Forest Environmental Services.", tags: ["PFES", "FPD Fund"] },
        { key: "carbon", title: "Forest carbon markets", desc: "Forest carbon credit mechanisms; measurement, reporting and verification.", tags: ["REDD+", "Article 6.4", "MRV"] },
        { key: "biodiversity", title: "Biodiversity conservation", desc: "Management of national parks, nature reserves and forest ecosystems.", tags: ["National parks", "Protected areas"] },
        { key: "law", title: "Law and international cooperation", desc: "Drafting legal normative documents; working with development partners.", tags: ["Legislation", "GEF", "GCF", "UNDP", "WB"] },
        { key: "digital", title: "Science, digital and AI", desc: "Innovation, digital transformation, AI for the public office and communication.", tags: ["Digital transformation", "AI at work", "Communication"] },
      ] as { key: SkillKey; title: string; desc: string; tags: string[] }[],
    },
    projects: {
      eyebrow: "Featured work",
      title: "Selected projects",
      intro: "Legal documents, guidance and tools I have helped develop and put into use.",
      featuredLabel: "Legal framework",
      featured: {
        title: "Legal framework for forest carbon sequestration and storage services",
        desc: "Contributed to drafting Decree No. 180/2026/ND-CP and Circular No. 31/2026/TT-BNNMT, the two instruments underpinning forest carbon sequestration and storage services.",
        docs: ["Decree No. 180/2026/ND-CP", "Circular No. 31/2026/TT-BNNMT"],
        link: "View Decree 180/2026/ND-CP (PDF)",
      },
      data: {
        tag: "Forestry data",
        title: "Data architecture, governance framework and data dictionary for the forestry sector",
        desc: "Circular No. 43/2026/TT-BNNMT of 30 September 2026 by the Ministry of Agriculture and Environment sets the data architecture, governance framework, data management and data dictionary for the forestry sector; in force from 20 November 2026.",
        doc: "Circular No. 43/2026/TT-BNNMT",
        link: "View Circular 43/2026/TT-BNNMT",
      },
      items: [
        { tag: "Q&A handbook", title: "Debunking misconceptions about forest carbon and forest carbon projects", desc: "A Q&A handbook explaining common misconceptions about forest carbon and forest carbon projects, for investors, forest owners and stakeholders.", link: "handbook" },
        { tag: "Training", title: "AI training toolkit for forestry officials", desc: "An A-to-Z handbook on Claude, ChatGPT, Google Gemini and NotebookLM, with presentation slides.", link: "" },
        { tag: "Sector report", title: "Forestry sector performance report 2025", desc: "Consolidated report on the performance of the forestry sector in 2025, published on the Administration's website (Vietnamese).", link: "report" },
        { tag: "Digital governance", title: "Civil servant KPI system and sector dashboards", desc: "KPI assessment for civil servants under Decree 335/2025/ND-CP, plus sector data dashboards.", link: "" },
      ],
      more: "Learn more",
      pdf: "View handbook (PDF)",
      report: "View report (PDF)",
    },
    experience: {
      eyebrow: "Experience",
      title: "Career",
      intro: "From running a fund and managing a special-use forest to national policy making.",
      items: [
        { time: "Present", title: "Deputy Director General", org: "Viet Nam Forestry Administration, Ministry of Agriculture and Environment of Viet Nam", desc: "Planning and finance, PFES, forest carbon markets, science and technology and digital transformation." },
        { time: "2018 - 2021", title: "Director", org: "Cat Tien National Park", desc: "Forest management and protection, biodiversity conservation in the national park." },
        { time: "2011 - 2016", title: "Established and operated", org: "Forest Protection and Development Fund", desc: "Built the organisation and ran the Fund in connection with the PFES policy." },
      ],
      current: "Current",
    },
    slogan: "Sustainable forestry development - For a green future of Viet Nam",
    contact: {
      eyebrow: "Contact",
      title: "Get in touch",
      intro: "For forestry policy, forest carbon, international cooperation or professional exchange, please reach out through the channels below.",
      emailLabel: "Email",
      fbLabel: "Facebook",
      agencyLabel: "Agency website",
      form: {
        title: "Send a message",
        name: "Full name",
        email: "Email",
        message: "Message",
        phName: "Your name",
        phEmail: "name@organisation.org",
        phMessage: "What would you like to discuss...",
        required: "Fields marked * are required",
        submit: "Send message",
        errName: "Please enter your full name (at least 2 characters).",
        errEmailEmpty: "Please enter your email.",
        errEmailBad: "Please enter a valid email address.",
        errMessage: "Please enter a message (at least 10 characters).",
        okTitle: "Your details look good",
        okText: "Click below to open your email app with the message pre-filled, then send it.",
        openMail: "Open email app",
        again: "Write another message",
        subject: "Contact from personal website",
        bodyName: "Name",
      },
    },
    footer: { rights: "All rights reserved.", top: "Back to top", nav: "Footer links" },
  },
};

export type Content = (typeof content)["vi"];
