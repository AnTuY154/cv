import type { Project } from "@/content/types";

export type Language = "vi" | "en";

export type ProjectCopy = {
  summary?: string;
  challenge?: string;
  contribution?: string;
  context?: string;
  responsibilities?: readonly string[];
  technicalDecisions?: readonly string[];
  learnings?: readonly string[];
  outcomes?: readonly string[];
};

type PrincipleCopy = {
  title: string;
  description: string;
};

type SkillGroupCopy = {
  label: string;
  description: string;
};

export type LocaleDictionary = {
  languageLabel: string;
  languageOptions: { vi: string; en: string };
  role: string;
  location: string;
  navigation: {
    work: string;
    experience: string;
    skills: string;
    about: string;
    contact: string;
    primaryNavigation: string;
    mobileNavigation: string;
    downloadCv: string;
    openMenu: string;
    closeMenu: string;
    homeLabel: string;
    skipToMain: string;
  };
  hero: {
    headline: string;
    description: string;
    viewWork: string;
    downloadCv: string;
    profileLinks: string;
    github: string;
    email: string;
    currentFocus: string;
    currentProjectDomain: string;
    ongoing: string;
    visualLabel: string;
    visualCaption: string;
  };
  credibility: {
    sectionLabel: string;
    yearsValue: string;
    deliveryLabel: string;
    projectsValue: (completed: number, ongoing: number) => string;
    projectsLabel: string;
    reactValue: (since: string) => string;
    nextLabel: (since: string) => string;
  };
  work: {
    eyebrow: string;
    title: string;
    description: string;
    timelineLink: string;
    challengeLabel: string;
    contributionLabel: string;
    technologiesLabel: string;
    readCaseStudy: string;
    technologiesAriaLabel: (projectName: string) => string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    currentProjectLabel: string;
    currentProjectDescription: string;
    ongoing: string;
    viewScope: string;
    companyTitles: Record<string, string>;
    companyDescriptions: Record<string, string>;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    index: string;
    groups: Record<string, SkillGroupCopy>;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    storyEyebrow: string;
    story: readonly [string, string];
    detailsEyebrow: string;
    universityLabel: string;
    birthLabel: string;
    birthDate: string;
    locationLabel: string;
    principlesEyebrow: string;
    principlesTitle: string;
    principles: readonly PrincipleCopy[];
    interestsLabel: string;
    interests: Record<string, string>;
  };
  contact: {
    status: string;
    title: string;
    description: string;
    locationLabel: string;
    github: string;
    email: string;
    startConversation: string;
    reviewResume: string;
    unpublishedNote: string;
  };
  resume: {
    eyebrow: string;
    title: string;
    description: string;
    downloadPdf: string;
    experienceEyebrow: string;
    experienceTitle: string;
    capabilitiesEyebrow: string;
    capabilitiesTitle: string;
    projectsEyebrow: string;
    projectsTitle: string;
    viewCaseStudies: string;
  };
  project: {
    backToWork: string;
    technologiesAriaLabel: (projectName: string) => string;
    overviewAriaLabel: string;
    overview: string;
    domain: string;
    period: string;
    client: string;
    company: string;
    status: string;
    current: string;
    ongoing: string;
    completed: string;
    contextEyebrow: string;
    contextTitle: string;
    challengeEyebrow: string;
    challengeTitle: string;
    responsibilitiesEyebrow: string;
    responsibilitiesTitle: string;
    technicalDecisionsEyebrow: string;
    technicalDecisionsTitle: string;
    outcomeEyebrow: string;
    outcomeTitle: string;
    scopeNoteAriaLabel: string;
    scopeNote: string;
    previous: string;
    next: string;
    navigationAriaLabel: string;
  };
  footer: {
    tagline: string;
    resume: string;
    github: string;
    email: string;
    backToTop: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
  domains: Record<string, string>;
};

export const dictionaries: Record<Language, LocaleDictionary> = {
  vi: {
    languageLabel: "Ngôn ngữ",
    languageOptions: { vi: "Tiếng Việt", en: "Tiếng Anh" },
    role: "Software Engineer định hướng Frontend",
    location: "Hà Nội, Việt Nam",
    navigation: {
      work: "Công việc",
      experience: "Kinh nghiệm",
      skills: "Kỹ năng",
      about: "Về mình",
      contact: "Liên hệ",
      primaryNavigation: "Điều hướng chính",
      mobileNavigation: "Điều hướng trên thiết bị nhỏ",
      downloadCv: "Tải CV",
      openMenu: "Mở menu điều hướng",
      closeMenu: "Đóng menu điều hướng",
      homeLabel: "Về trang chủ của Đỗ Trọng Anh Tuấn",
      skipToMain: "Tới nội dung chính",
    },
    hero: {
      headline: "Mình xây dựng những sản phẩm web rõ ràng, đáng tin cậy với React và Next.js.",
      description:
        "Mình là Software Engineer định hướng Frontend với 5 năm kinh nghiệm xây dựng sản phẩm web doanh nghiệp bằng React và Next.js. Mình có kinh nghiệm triển khai design system, hiện đại hóa ứng dụng, SEO, giao diện giàu dữ liệu, review code và phối hợp để đưa sản phẩm đi tiếp.",
      viewWork: "Xem những dự án tiêu biểu",
      downloadCv: "Tải CV",
      profileLinks: "Các liên kết hồ sơ",
      github: "GitHub",
      email: "Email",
      currentFocus: "Đang tập trung",
      currentProjectDomain: "Dịch vụ xưởng ô tô",
      ongoing: "Đang thực hiện",
      visualLabel: "Hình minh họa trừu tượng về code và hệ thống sản phẩm",
      visualCaption: "Tư duy hệ thống · trau chuốt giao diện · kỹ lưỡng khi delivery",
    },
    credibility: {
      sectionLabel: "Điểm nổi bật về kinh nghiệm",
      yearsValue: "5 năm",
      deliveryLabel: "trong lĩnh vực phát triển phần mềm",
      projectsValue: (completed, ongoing) =>
        `${completed} dự án đã hoàn thành + ${ongoing} đang thực hiện`,
      projectsLabel: "trong hồ sơ dự án",
      reactValue: (since) => `React từ ${since}`,
      nextLabel: (since) => `Next.js từ ${since}`,
    },
    work: {
      eyebrow: "Những bài toán mình đã tham gia",
      title: "Một hồ sơ thực tế về các sản phẩm và nền tảng.",
      description:
        "Sáu dự án có câu chuyện đã được xác nhận rõ nhất, từ dịch vụ ô tô đến hệ thống component và công việc hiện đại hóa.",
      timelineLink: "Xem toàn bộ timeline",
      challengeLabel: "Bài toán",
      contributionLabel: "Phần mình tham gia",
      technologiesLabel: "Công nghệ",
      readCaseStudy: "Xem case study",
      technologiesAriaLabel: (projectName) => `Công nghệ của ${projectName}`,
    },
    experience: {
      eyebrow: "Kinh nghiệm",
      title: "Năm năm làm việc qua nhiều bối cảnh sản phẩm khác nhau.",
      description:
        "Timeline theo công ty giúp phần kinh nghiệm dễ theo dõi mà không lặp lại cùng một chức danh ở mọi dự án.",
      currentProjectLabel: "Bối cảnh dự án hiện tại",
      currentProjectDescription:
        "Các dịch vụ đang được phát triển cho xưởng dịch vụ ô tô trong hệ sinh thái TASCO.",
      ongoing: "Đang thực hiện",
      viewScope: "Xem phạm vi dự án đã xác nhận",
      companyTitles: {
        "HBLAB JSC": "Kỹ sư phần mềm",
        "Viettel Software Service": "Kỹ sư phần mềm",
        "FPT Software": "Kỹ sư phần mềm",
      },
      companyDescriptions: {
        "HBLAB JSC":
          "Mình đã làm việc qua các công cụ quản lý, dashboard, thanh toán, observability và nền tảng marketing.",
        "Viettel Software Service":
          "Mình đã phát triển phần mềm cho các quy trình đăng ký và kiểm tra của Viettel Family.",
        "FPT Software": "Mình đã làm việc qua công cụ yêu cầu và hệ thống component.",
      },
    },
    skills: {
      eyebrow: "Năng lực",
      title: "Công cụ có ý nghĩa hơn khi được đặt cạnh loại công việc chúng hỗ trợ.",
      description:
        "Một bản đồ năng lực thay cho logo cloud: trau chuốt giao diện, chiều sâu tích hợp và thói quen delivery nằm trong cùng một bức tranh.",
      index: "05 / 05",
      groups: {
        Frontend: {
          label: "Frontend",
          description: "Những giao diện rõ ràng trên nhiều màn hình và thiết bị.",
        },
        "UI engineering": {
          label: "Kỹ thuật UI",
          description: "Component có thể tái sử dụng, chuyển từ ý đồ thiết kế thành UI dễ bảo trì.",
        },
        "Backend & integration": {
          label: "Backend & tích hợp",
          description: "Công việc tích hợp thực tế giữa các ranh giới sản phẩm.",
        },
        "Product integrations": {
          label: "Tích hợp sản phẩm",
          description:
            "Những tích hợp hướng đến người dùng, nơi chi tiết kỹ thuật gặp workflow thực tế.",
        },
        Delivery: {
          label: "Delivery",
          description: "Thói quen delivery dựa trên bối cảnh chung và chất lượng ổn định.",
        },
      },
    },
    about: {
      eyebrow: "Về mình",
      title: "Mình là Tuấn — và đây là cách mình tiếp tục học hỏi.",
      description: "Một chút về con người, cách mình làm việc và những điều mình đang trau dồi.",
      storyEyebrow: "Câu chuyện của mình",
      story: [
        "Chào mừng bạn đến với trang giới thiệu của mình. Mình là Tuấn, cựu sinh viên FPT University và là Software Engineer định hướng Frontend. Với 5 năm kinh nghiệm trong nghề, mình không chỉ trau dồi kỹ năng lập trình mà còn chủ động tìm hiểu nghiệp vụ, quy trình sản phẩm và những kiến thức quản lý giúp đội ngũ phối hợp tốt hơn và tạo ra phần mềm hữu ích.",
        "Mình sinh ngày 15/04/1999. Hiện tại, mình đang tiếp tục học hỏi qua những bài toán sản phẩm thực tế, đặc biệt là cách biến yêu cầu phức tạp thành trải nghiệm rõ ràng, dễ dùng và có thể duy trì lâu dài.",
      ],
      detailsEyebrow: "Một chút về mình",
      universityLabel: "Học vấn",
      birthLabel: "Ngày sinh",
      birthDate: "15/04/1999",
      locationLabel: "Nơi ở",
      principlesEyebrow: "Nguyên tắc làm việc",
      principlesTitle: "Những điều mình coi trọng",
      principles: [
        {
          title: "Mình ưu tiên sự rõ ràng",
          description: "Mình cố gắng làm cho yêu cầu và cách triển khai dễ hiểu hơn.",
        },
        {
          title: "Mình luôn học từ bối cảnh sản phẩm",
          description: "Mình tìm hiểu bài toán phía sau trước khi chọn cách làm.",
        },
        {
          title: "Mình thích chia sẻ và phối hợp",
          description: "Mình muốn mọi người cùng có đủ bối cảnh để đi cùng một hướng.",
        },
        {
          title: "Mình quan tâm đến chất lượng sau khi bàn giao",
          description:
            "Mình vẫn để ý đến trải nghiệm và khả năng duy trì sau khi phần việc được giao.",
        },
      ],
      interestsLabel: "Sở thích ngoài công việc",
      interests: {
        Basketball: "Bóng rổ",
        Music: "Âm nhạc",
        Trekking: "Trekking",
        Travel: "Du lịch",
      },
    },
    contact: {
      status: "Mình sẵn sàng cho một cuộc trò chuyện thú vị",
      title: "Cùng làm cho sản phẩm tiếp theo rõ ràng hơn.",
      description:
        "Nếu bạn đang tìm một người đồng hành frontend quan tâm cả giao diện lẫn những chi tiết delivery, mình rất vui được nghe về bài toán của bạn.",
      locationLabel: "Hà Nội, Việt Nam",
      github: "GitHub",
      email: "Email",
      startConversation: "Bắt đầu trò chuyện",
      reviewResume: "Xem CV",
      unpublishedNote:
        "Email và GitHub hiện chưa được công khai vì mình vẫn đang chờ xác nhận thông tin.",
    },
    resume: {
      eyebrow: "CV trực tuyến",
      title: "CV",
      description: "Tóm tắt ngắn gọn về kinh nghiệm và hồ sơ dự án đã được xác nhận.",
      downloadPdf: "Tải PDF",
      experienceEyebrow: "Kinh nghiệm",
      experienceTitle: "Timeline theo công ty",
      capabilitiesEyebrow: "Năng lực",
      capabilitiesTitle: "Bộ công cụ mình sử dụng",
      projectsEyebrow: "Dự án tiêu biểu",
      projectsTitle: "Những tín hiệu rõ nhất đã được xác nhận",
      viewCaseStudies: "Xem các case study",
    },
    project: {
      backToWork: "Quay lại các dự án tiêu biểu",
      technologiesAriaLabel: (projectName) => `Công nghệ của ${projectName}`,
      overviewAriaLabel: "Tổng quan dự án",
      overview: "Tổng quan",
      domain: "Lĩnh vực",
      period: "Thời gian",
      client: "Khách hàng",
      company: "Công ty",
      status: "Trạng thái",
      current: "Hiện tại",
      ongoing: "Đang thực hiện",
      completed: "Hồ sơ dự án đã hoàn thành",
      contextEyebrow: "Bối cảnh",
      contextTitle: "Sản phẩm nói về điều gì",
      challengeEyebrow: "Bài toán",
      challengeTitle: "Không gian vấn đề",
      responsibilitiesEyebrow: "Phần mình tham gia",
      responsibilitiesTitle: "Mình đã đóng góp ở đâu",
      technicalDecisionsEyebrow: "Quyết định kỹ thuật",
      technicalDecisionsTitle: "Những gì đã được xác nhận",
      outcomeEyebrow: "Kết quả",
      outcomeTitle: "Điều gì đã thay đổi",
      scopeNoteAriaLabel: "Ghi chú về phạm vi",
      scopeNote:
        "Mục này được giới hạn có chủ đích ở thông tin dự án và lĩnh vực đã được xác nhận.",
      previous: "Dự án trước",
      next: "Dự án tiếp theo",
      navigationAriaLabel: "Điều hướng dự án",
    },
    footer: {
      tagline: "Giao diện rõ ràng, triển khai cẩn thận và delivery ổn định.",
      resume: "CV",
      github: "GitHub",
      email: "Email",
      backToTop: "Về đầu trang",
    },
    notFound: {
      title: "Trang này không có trong danh mục dự án.",
      description: "Bạn có thể quay lại các dự án tiêu biểu hoặc trang chủ.",
      backHome: "Về trang chủ",
    },
    domains: {
      "Automotive services": "Dịch vụ ô tô",
      "Marketing platform": "Nền tảng marketing",
      "Observability tooling": "Công cụ observability",
      Payments: "Thanh toán",
      "Building management": "Quản lý tòa nhà",
      "UI engineering": "Kỹ thuật UI",
      "Enterprise tooling": "Công cụ doanh nghiệp",
      "Registration workflow": "Quy trình đăng ký",
      "Audit workflow": "Quy trình kiểm tra",
      "File and property management": "Quản lý tệp và tài sản",
      "User administration": "Quản trị người dùng",
      "Workflow administration": "Quản trị workflow",
      "Data dashboard": "Dashboard dữ liệu",
      "SEO modernization": "Hiện đại hóa SEO",
    },
  },
  en: {
    languageLabel: "Language",
    languageOptions: { vi: "Vietnamese", en: "English" },
    role: "Frontend-focused Software Engineer",
    location: "Hanoi, Vietnam",
    navigation: {
      work: "Work",
      experience: "Experience",
      skills: "Skills",
      about: "About",
      contact: "Contact",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
      downloadCv: "Download CV",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      homeLabel: "Đỗ Trọng Anh Tuấn home",
      skipToMain: "Skip to main content",
    },
    hero: {
      headline: "I build clear, reliable web products with React and Next.js.",
      description:
        "I am a frontend-focused Software Engineer with five years of experience building enterprise web products with React and Next.js. I work across design-system implementation, application modernization, SEO, data-rich interfaces, code review, and cross-functional delivery.",
      viewWork: "View selected work",
      downloadCv: "Download CV",
      profileLinks: "Profile links",
      github: "GitHub",
      email: "Email",
      currentFocus: "Current focus",
      currentProjectDomain: "Automotive workshop services",
      ongoing: "Ongoing",
      visualLabel: "Abstract code and product systems visual",
      visualCaption: "Systems thinking · interface craft · delivery detail",
    },
    credibility: {
      sectionLabel: "Experience highlights",
      yearsValue: "Five years",
      deliveryLabel: "in software delivery",
      projectsValue: (completed, ongoing) => `${completed} completed + ${ongoing} ongoing`,
      projectsLabel: "projects in the portfolio record",
      reactValue: (since) => `React since ${since}`,
      nextLabel: (since) => `Next.js since ${since}`,
    },
    work: {
      eyebrow: "Problems I have worked on",
      title: "A practical record of products and platforms.",
      description:
        "Six projects with the clearest verified story, from automotive services to component systems and modernization work.",
      timelineLink: "See the wider timeline",
      challengeLabel: "Challenge",
      contributionLabel: "Contribution",
      technologiesLabel: "Technologies",
      readCaseStudy: "Read case study",
      technologiesAriaLabel: (projectName) => `${projectName} technologies`,
    },
    experience: {
      eyebrow: "Experience",
      title: "Five years of working across different product contexts.",
      description:
        "A company-grouped view keeps the timeline useful without repeating the same title on every project.",
      currentProjectLabel: "Current project context",
      currentProjectDescription:
        "Ongoing services for automotive workshops in the TASCO ecosystem.",
      ongoing: "Ongoing",
      viewScope: "View verified project scope",
      companyTitles: {
        "HBLAB JSC": "Software Engineer",
        "Viettel Software Service": "Software Engineer",
        "FPT Software": "Software Engineer",
      },
      companyDescriptions: {
        "HBLAB JSC":
          "I worked across management tools, dashboards, payments, observability, and marketing platforms.",
        "Viettel Software Service":
          "I developed software for Viettel Family registration and audit workflows.",
        "FPT Software": "I worked across enterprise requirements and component-system work.",
      },
    },
    skills: {
      eyebrow: "Capabilities",
      title: "The tools make more sense when grouped by the work they support.",
      description:
        "A capability map instead of a logo cloud: interface craft, integration depth, and delivery habits sit together.",
      index: "05 / 05",
      groups: {
        Frontend: {
          label: "Frontend",
          description: "Interfaces that stay clear across screens and devices.",
        },
        "UI engineering": {
          label: "UI engineering",
          description: "Reusable components translated from design intent into maintainable UI.",
        },
        "Backend & integration": {
          label: "Backend & integration",
          description: "Pragmatic integration work across product boundaries.",
        },
        "Product integrations": {
          label: "Product integrations",
          description:
            "Product-facing integrations where implementation details meet user workflows.",
        },
        Delivery: {
          label: "Delivery",
          description: "A delivery habit built around shared context and steady quality.",
        },
      },
    },
    about: {
      eyebrow: "About",
      title: "A little more about me and how I work.",
      description:
        "A personal view of the person, working principles, and interests behind the projects.",
      storyEyebrow: "My story",
      story: [
        "Welcome to my profile. I’m Tuấn, an FPT University alumnus and a frontend-focused Software Engineer. With five years of professional experience, I keep developing beyond coding — learning the product domains, business processes, and management practices that help teams collaborate well and build useful software.",
        "I was born on 15 April 1999. Today, I continue learning through real product problems, especially how to turn complex requirements into experiences that are clear, useful, and maintainable.",
      ],
      detailsEyebrow: "A little more about me",
      universityLabel: "Education",
      birthLabel: "Born",
      birthDate: "15 April 1999",
      locationLabel: "Based in",
      principlesEyebrow: "Working principles",
      principlesTitle: "What I care about",
      principles: [
        {
          title: "I value clarity",
          description: "I try to make requirements and implementation easier to understand.",
        },
        {
          title: "I learn from product context",
          description: "I look for the problem behind the work before choosing an approach.",
        },
        {
          title: "I collaborate openly",
          description: "I like sharing context so people can move in the same direction.",
        },
        {
          title: "I care about quality after handoff",
          description: "I keep an eye on the experience and maintainability after delivery.",
        },
      ],
      interestsLabel: "Off-screen interests",
      interests: {
        Basketball: "Basketball",
        Music: "Music",
        Trekking: "Trekking",
        Travel: "Travel",
      },
    },
    contact: {
      status: "Open to a thoughtful conversation",
      title: "Let’s make the next product clearer.",
      description:
        "If the work needs a frontend partner who cares about both the interface and the delivery details, I’d be glad to hear about it.",
      locationLabel: "Hanoi, Vietnam",
      github: "GitHub",
      email: "Email",
      startConversation: "Start a conversation",
      reviewResume: "Review the resume",
      unpublishedNote:
        "Direct email and GitHub links are intentionally unpublished until verified.",
    },
    resume: {
      eyebrow: "Web resume",
      title: "Resume",
      description:
        "A concise view of the verified experience and project record behind this portfolio.",
      downloadPdf: "Download PDF",
      experienceEyebrow: "Experience",
      experienceTitle: "Company timeline",
      capabilitiesEyebrow: "Capabilities",
      capabilitiesTitle: "Working toolkit",
      projectsEyebrow: "Selected projects",
      projectsTitle: "The strongest verified signals",
      viewCaseStudies: "View case studies",
    },
    project: {
      backToWork: "Back to selected work",
      technologiesAriaLabel: (projectName) => `${projectName} technologies`,
      overviewAriaLabel: "Project overview",
      overview: "Overview",
      domain: "Domain",
      period: "Period",
      client: "Client",
      company: "Company",
      status: "Status",
      current: "Current",
      ongoing: "Ongoing",
      completed: "Completed project record",
      contextEyebrow: "Context",
      contextTitle: "What the product is about",
      challengeEyebrow: "Challenge",
      challengeTitle: "The problem space",
      responsibilitiesEyebrow: "Responsibilities",
      responsibilitiesTitle: "Where I contributed",
      technicalDecisionsEyebrow: "Technical decisions",
      technicalDecisionsTitle: "What is verified",
      outcomeEyebrow: "Outcome",
      outcomeTitle: "What changed",
      scopeNoteAriaLabel: "Scope note",
      scopeNote:
        "This project entry is intentionally limited to verified project and domain information.",
      previous: "Previous project",
      next: "Next project",
      navigationAriaLabel: "Project navigation",
    },
    footer: {
      tagline: "Clear interfaces, careful implementation, and steady delivery.",
      resume: "Resume",
      github: "GitHub",
      email: "Email",
      backToTop: "Back to top",
    },
    notFound: {
      title: "That page is not in the project index.",
      description: "Try returning to the selected work or the homepage.",
      backHome: "Back home",
    },
    domains: {
      "Automotive services": "Automotive services",
      "Marketing platform": "Marketing platform",
      "Observability tooling": "Observability tooling",
      Payments: "Payments",
      "Building management": "Building management",
      "UI engineering": "UI engineering",
      "Enterprise tooling": "Enterprise tooling",
      "Registration workflow": "Registration workflow",
      "Audit workflow": "Audit workflow",
      "File and property management": "File and property management",
      "User administration": "User administration",
      "Workflow administration": "Workflow administration",
      "Data dashboard": "Data dashboard",
      "SEO modernization": "SEO modernization",
    },
  },
};

const projectCopies: Record<Language, Record<string, ProjectCopy>> = {
  vi: {
    oneauto: {
      summary: "Các dịch vụ phục vụ xưởng dịch vụ ô tô trong hệ sinh thái TASCO.",
      challenge:
        "Bối cảnh sản phẩm đang được phát triển với các dịch vụ dành cho xưởng dịch vụ ô tô.",
      contribution:
        "Phạm vi công khai đã được xác nhận hiện chỉ bao gồm lĩnh vực sản phẩm và stack.",
      context: "Các dịch vụ đang được phát triển cho xưởng dịch vụ ô tô trong hệ sinh thái TASCO.",
    },
    "hp-booster": {
      summary: "Một trình xây dựng website marketing kéo-thả.",
      challenge:
        "Đội ngũ marketing cần một cách linh hoạt để lắp ghép trang mà không phải xây riêng cho từng biến thể.",
      contribution:
        "Mình đã tham gia vào bối cảnh builder và hỗ trợ chia công việc thành các task nhỏ hơn.",
      responsibilities: [
        "Mình đã làm việc với một trình xây dựng website marketing kéo-thả.",
        "Mình đã hỗ trợ chia công việc delivery thành các task nhỏ, dễ xử lý hơn.",
      ],
      context:
        "Một công cụ xây dựng website marketing tập trung vào việc tạo trang bằng thao tác kéo-thả.",
    },
    "grafana-tools": {
      summary: "Hiện đại hóa từ Grafana 6.3.4 lên Grafana 12.2.",
      challenge: "Một bộ công cụ dựa trên Grafana cũ cần được hiện đại hóa phiên bản lớn.",
      contribution: "Mình đã tham gia công việc hiện đại hóa Grafana từ 6.3.4 lên 12.2.",
      responsibilities: ["Mình đã hiện đại hóa bộ công cụ Grafana từ 6.3.4 lên 12.2."],
      context: "Một bộ công cụ Grafana đang được hiện đại hóa qua một phiên bản lớn.",
      technicalDecisions: ["Ranh giới migration đã được xác nhận là Grafana 6.3.4 → 12.2."],
    },
    "kotoba-stripe": {
      summary: "Các workflow thanh toán trực tuyến và quản lý tài khoản.",
      challenge:
        "Các workflow thanh toán và tài khoản cần dễ hiểu trong suốt hành trình của khách hàng.",
      contribution:
        "Mình đã làm việc với các luồng thanh toán dựa trên Stripe và quản lý tài khoản.",
      responsibilities: [
        "Mình đã làm việc với các workflow thanh toán trực tuyến và quản lý tài khoản.",
      ],
      context: "Một sản phẩm kết hợp các workflow thanh toán trực tuyến và quản lý tài khoản.",
      technicalDecisions: ["Stripe là tích hợp thanh toán đã được xác nhận trong hồ sơ dự án."],
    },
    commerce: {
      summary: "Quản lý tòa nhà và phân tích dữ liệu với các tích hợp bản đồ.",
      challenge: "Vận hành tòa nhà cần góc nhìn rõ ràng về dữ liệu tài sản và bối cảnh vị trí.",
      contribution:
        "Mình đã làm việc với các luồng quản lý tòa nhà và phân tích dữ liệu bằng Google Maps và Terra Map.",
      responsibilities: [
        "Mình đã làm việc với các workflow quản lý tòa nhà và phân tích dữ liệu.",
        "Mình đã tích hợp Google Maps và Terra Map trong phạm vi dự án đã xác nhận.",
      ],
      context: "Một sản phẩm quản lý tòa nhà có phần phân tích dữ liệu và các tích hợp bản đồ.",
      technicalDecisions: ["Các tích hợp bản đồ đã được xác nhận là Google Maps và Terra Map."],
    },
    "aia-components": {
      summary: "Hệ thống component được hỗ trợ bởi Storybook và kiểm thử E2E.",
      challenge: "UI dùng chung cần hành vi nhất quán và một cách lặp lại để kiểm tra component.",
      contribution:
        "Mình đã tham gia triển khai component từ Figma/design system cùng Storybook và kiểm thử E2E.",
      responsibilities: [
        "Mình đã triển khai UI component từ đầu vào Figma/design system.",
        "Mình đã làm việc với Storybook và kiểm thử E2E trong phạm vi dự án đã xác nhận.",
      ],
      context:
        "Công việc component cho AIA Thailand tập trung vào UI tái sử dụng và việc kiểm chứng.",
      technicalDecisions: [
        "Storybook và kiểm thử E2E là các thực hành đã được xác nhận trong phạm vi dự án.",
      ],
    },
    "requirement-tool": {
      summary: "Công cụ quản lý yêu cầu phần mềm trong bối cảnh delivery doanh nghiệp.",
    },
    "viettel-family-registration": {
      summary: "Trải nghiệm đăng ký cho các hoạt động thi đua của Viettel Family.",
    },
    "viettel-family-audit": {
      summary: "Các workflow kiểm tra và audit cho Viettel Family.",
    },
    kpro: {
      summary: "Các workflow quản lý tệp và tài sản.",
    },
    account: {
      summary: "Quản lý người dùng và nhóm người dùng.",
    },
    "commerce-admin": {
      summary: "Quản lý workflow và công thức cho Commerce.",
    },
    "musma-dashboard": {
      summary: "Các biểu đồ và dashboard theo dõi công việc của nhân viên.",
    },
    "swiper-kit": {
      summary: "Công cụ website marketing và công việc migration từ React sang Next.js.",
      contribution:
        "Mình đã làm việc với công cụ website marketing và migration từ React sang Next.js.",
    },
    "commerce-convert": {
      summary: "Migration từ React sang Next.js và công việc SEO.",
      contribution:
        "Mình đã tham gia migration từ React sang Next.js cùng các phần việc liên quan đến SEO.",
    },
  },
  en: {
    oneauto: {
      contribution: "The verified public scope currently covers the product domain and stack.",
    },
    "hp-booster": {
      contribution:
        "I worked on the builder context and helped break delivery work into smaller tasks.",
      responsibilities: [
        "I worked on a drag-and-drop marketing website builder.",
        "I helped break delivery work into smaller, more actionable tasks.",
      ],
    },
    "grafana-tools": {
      contribution: "I contributed to the Grafana 6.3.4 → 12.2 modernization work.",
      responsibilities: ["I modernized Grafana tooling from 6.3.4 to 12.2."],
    },
    "kotoba-stripe": {
      contribution: "I worked with Stripe-based payment flows and account management.",
      responsibilities: ["I worked on online payment and account-management workflows."],
    },
    commerce: {
      contribution:
        "I worked with building-management and data-analysis flows using Google Maps and Terra Map.",
      responsibilities: [
        "I worked on building-management and data-analysis workflows.",
        "I integrated Google Maps and Terra Map within the verified project scope.",
      ],
    },
    "aia-components": {
      contribution:
        "I worked on Figma-to-code component implementation with Storybook and E2E testing.",
      responsibilities: [
        "I implemented UI components from Figma/design-system inputs.",
        "I worked with Storybook and E2E testing within the verified project scope.",
      ],
    },
    "swiper-kit": {
      contribution: "I worked on a marketing website tool and a React-to-Next.js migration.",
    },
    "commerce-convert": {
      contribution: "I contributed to a React-to-Next.js migration and related SEO work.",
    },
  },
};

export function getProjectCopy(project: Project, language: Language): ProjectCopy {
  const fallback: ProjectCopy = {
    summary: project.summary,
    challenge: project.challenge,
    contribution: project.contribution,
    context: project.detail?.context,
    responsibilities: project.responsibilities,
    technicalDecisions: project.detail?.technicalDecisions,
    learnings: project.detail?.learnings,
    outcomes: project.outcomes,
  };

  return { ...fallback, ...projectCopies[language][project.slug] };
}

export function getDomainLabel(domain: string, language: Language): string {
  return dictionaries[language].domains[domain] ?? domain;
}

export function getExperienceDescription(
  company: string,
  fallback: string,
  language: Language,
): string {
  return dictionaries[language].experience.companyDescriptions[company] ?? fallback;
}

export function getExperienceTitle(company: string, fallback: string, language: Language): string {
  return dictionaries[language].experience.companyTitles[company] ?? fallback;
}

export function getSkillGroupCopy(label: string, language: Language): SkillGroupCopy | undefined {
  return dictionaries[language].skills.groups[label];
}

export function getInterestLabel(interest: string, language: Language): string {
  return dictionaries[language].about.interests[interest] ?? interest;
}
