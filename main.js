// AI-Powered Social Media Platform - Core JavaScript
const AIPoweredSocial = {
    // Language and localization
    currentLanguage: 'en',
    translations: {
        en: {
            navHome: 'Home',
            navExplore: 'Explore AI',
            navWorlds: 'Worlds',
            navProfile: 'Profile',
            navDashboard: 'AI Dashboard',
            navSettings: 'Settings',
            login: 'Login',
            register: 'Register',
            logout: 'Logout',
            aiAssistant: 'AI Assistant',
            createPost: 'Create Post',
            writeSomething: 'Share your thoughts...',
            generateWithAI: 'Generate with AI',
            trendingTopics: 'Trending Topics',
            recommendedForYou: 'Recommended for You',
            worldExplorer: 'World Explorer',
            joinWorld: 'Join World',
            createWorld: 'Create World',
            members: 'Members',
            posts: 'Posts',
            analytics: 'Analytics',
            insights: 'AI Insights',
            contentCreator: 'Content Creator',
            schedulePost: 'Schedule Post',
            autoReply: 'Auto Reply',
            language: 'Language',
            english: 'English',
            arabic: 'العربية',
            aiLevel: 'AI Customization Level',
            basic: 'Basic',
            balanced: 'Balanced',
            advanced: 'Advanced',
            privacy: 'Privacy',
            notifications: 'Notifications',
            theme: 'Theme',
            light: 'Light',
            dark: 'Dark',
            auto: 'Auto'
        },
        ar: {
            navHome: 'الرئيسية',
            navExplore: 'استكشف الذكاء الاصطناعي',
            navWorlds: 'العوالم',
            navProfile: 'الملف الشخصي',
            navDashboard: 'لوحة التحكم الذكية',
            navSettings: 'الإعدادات',
            login: 'تسجيل الدخول',
            register: 'التسجيل',
            logout: 'تسجيل الخروج',
            aiAssistant: 'المساعد الذكي',
            createPost: 'إنشاء منشور',
            writeSomething: 'شارك أفكارك...',
            generateWithAI: 'إنشاء بالذكاء الاصطناعي',
            trendingTopics: 'المواضيع الرائجة',
            recommendedForYou: 'موصى به لك',
            worldExplorer: 'مستكشف العوالم',
            joinWorld: 'انضم إلى العالم',
            createWorld: 'إنشاء عالم',
            members: 'الأعضاء',
            posts: 'المنشورات',
            analytics: 'التحليلات',
            insights: 'رؤى الذكاء الاصطناعي',
            contentCreator: 'منشئ المحتوى',
            schedulePost: 'جدولة المنشور',
            autoReply: 'الرد التلقائي',
            language: 'اللغة',
            english: 'English',
            arabic: 'العربية',
            aiLevel: 'مستوى تخصيص الذكاء الاصطناعي',
            basic: 'أساسي',
            balanced: 'متوازن',
            advanced: 'متقدم',
            privacy: 'الخصوصية',
            notifications: 'الإشعارات',
            theme: 'المظهر',
            light: 'فاتح',
            dark: 'داكن',
            auto: 'تلقائي'
        }
    },

    // Mock data for demonstration
    mockData: {
        users: [
            { id: 1, name: 'Sarah Chen', avatar: 'resources/avatar-1.jpg', interests: ['AI', 'Technology', 'Innovation'], followers: 1250, following: 340 },
            { id: 2, name: 'Alex Rivera', avatar: 'resources/avatar-2.jpg', interests: ['Art', 'Design', 'Creativity'], followers: 890, following: 567 },
            { id: 3, name: 'Jordan Kim', avatar: 'resources/avatar-3.jpg', interests: ['Gaming', 'VR', 'Development'], followers: 2100, following: 123 }
        ],
        
        worlds: [
            { id: 1, name: 'Tech Innovators', image: 'resources/world-1.jpg', members: 15420, posts: 3847, category: 'Technology', description: 'Exploring the latest in AI and emerging technologies' },
            { id: 2, name: 'Creative Studio', image: 'resources/world-2.jpg', members: 8930, posts: 2156, category: 'Arts', description: 'Digital art, design, and creative expression' },
            { id: 3, name: 'Gaming Universe', image: 'resources/world-3.jpg', members: 25600, posts: 8943, category: 'Gaming', description: 'All things gaming, from casual to competitive' },
            { id: 4, name: 'Mindful Living', image: 'resources/world-4.jpg', members: 6780, posts: 1234, category: 'Wellness', description: 'Mental health, mindfulness, and personal growth' },
            { id: 5, name: 'Startup Network', image: 'resources/world-5.jpg', members: 12450, posts: 3421, category: 'Business', description: 'Entrepreneurship, startups, and business innovation' },
            { id: 6, name: 'Future Thinkers', image: 'resources/world-6.jpg', members: 9870, posts: 2765, category: 'Science', description: 'Discussing the future of humanity and technology' }
        ],
        
        posts: [
            {
                id: 1,
                userId: 1,
                content: 'Just tested the new AI image generation feature on this platform! The results are absolutely incredible. The way it understands context and creates relevant visuals is mind-blowing. 🎨✨',
                image: 'resources/content-1.jpg',
                likes: 234,
                comments: 45,
                shares: 12,
                timestamp: '2 hours ago',
                aiScore: 0.95,
                tags: ['AI', 'Innovation', 'Technology']
            },
            {
                id: 2,
                userId: 2,
                content: 'Working on a new digital art series inspired by neural networks and human consciousness. The intersection of technology and creativity never ceases to amaze me. What do you think?',
                image: 'resources/content-2.jpg',
                likes: 189,
                comments: 67,
                shares: 23,
                timestamp: '4 hours ago',
                aiScore: 0.87,
                tags: ['Art', 'Digital Art', 'Creativity']
            },
            {
                id: 3,
                userId: 3,
                content: 'The AI-powered matchmaking system in this platform is genius! It connected me with developers working on similar projects. Already brainstorming collaboration ideas. 🤖💡',
                image: 'resources/content-3.jpg',
                likes: 156,
                comments: 34,
                shares: 8,
                timestamp: '6 hours ago',
                aiScore: 0.92,
                tags: ['AI', 'Networking', 'Development']
            }
        ],
        
        trendingTopics: ['#AIArt', '#FutureTech', '#DigitalInnovation', '#SmartCommunities', '#TechEthics'],
        
        emotions: ['Joyful', 'Inspiring', 'Thought-provoking', 'Relaxing', 'Exciting', 'Motivating']
    },

    // Initialize the application
    init() {
        this.detectLanguage();
        this.setupEventListeners();
        this.initializeAnimations();
        this.loadUserPreferences();
        this.startAIAssistants();
    },

    // Language detection and switching
    detectLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
        this.currentLanguage = savedLang || browserLang;
        this.applyTranslations();
    },

    switchLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        this.applyTranslations();
        this.updateLayoutDirection();
    },

    applyTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLanguage][key]) {
                element.textContent = this.translations[this.currentLanguage][key];
            }
        });
    },

    updateLayoutDirection() {
        document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.body.classList.toggle('rtl', this.currentLanguage === 'ar');
    },

    t(key) {
        return this.translations[this.currentLanguage][key] || key;
    },

    // Event listeners setup
    setupEventListeners() {
        // Language toggle
        const langToggle = document.getElementById('languageToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.switchLanguage(this.currentLanguage === 'en' ? 'ar' : 'en');
            });
        }

        // Navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-page]')) {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                this.navigateToPage(page);
            }
        });

        // AI Assistant
        const aiAssistant = document.getElementById('aiAssistant');
        if (aiAssistant) {
            aiAssistant.addEventListener('click', () => this.toggleAIChat());
        }

        // Post creation
        const createPostBtn = document.getElementById('createPostBtn');
        if (createPostBtn) {
            createPostBtn.addEventListener('click', () => this.openPostCreator());
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        }
    },

    // Navigation
    navigateToPage(page) {
        if (page && page !== window.location.pathname.split('/').pop().replace('.html', '')) {
            window.location.href = page === 'home' ? 'index.html' : `${page}.html`;
        }
    },

    // AI Assistant functionality
    toggleAIChat() {
        const chatContainer = document.getElementById('aiChatContainer');
        if (chatContainer) {
            chatContainer.classList.toggle('hidden');
            if (!chatContainer.classList.contains('hidden')) {
                this.initializeAIChat();
            }
        }
    },

    initializeAIChat() {
        const chatMessages = document.getElementById('aiChatMessages');
        if (chatMessages && chatMessages.children.length === 0) {
            this.addAIMessage('Hello! I\'m your AI assistant. How can I help you discover amazing content and connect with like-minded people today?');
        }
    },

    addAIMessage(message) {
        const chatMessages = document.getElementById('aiChatMessages');
        if (chatMessages) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'ai-message bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-3 rounded-lg mb-2 glass-effect';
            messageDiv.innerHTML = `
                <div class="flex items-start space-x-3">
                    <img src="resources/ai-assistant.png" alt="AI" class="w-8 h-8 rounded-full">
                    <div class="flex-1">
                        <p class="text-sm text-gray-300">${message}</p>
                    </div>
                </div>
            `;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    },

    // Post creation
    openPostCreator() {
        const modal = document.getElementById('postCreatorModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.animateModalOpen(modal);
        }
    },

    closePostCreator() {
        const modal = document.getElementById('postCreatorModal');
        if (modal) {
            this.animateModalClose(modal, () => {
                modal.classList.add('hidden');
            });
        }
    },

    generatePostWithAI() {
        const contentInput = document.getElementById('postContent');
        if (contentInput) {
            const aiSuggestions = [
                'Just discovered an amazing AI tool that transforms how we think about creative collaboration! The future of human-AI partnership is brighter than ever. ✨🤖',
                'Exploring the intersection of technology and human connection in this digital age. How has AI changed the way you create and share content?',
                'The AI algorithms on this platform are incredible! They understand context and intent in ways that truly enhance our social experience.',
                'Thinking about the ethical implications of AI in social media. It\'s crucial that we build these systems with human values at their core.'
            ];
            const randomSuggestion = aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)];
            contentInput.value = randomSuggestion;
            this.addAIMessage('I\'ve generated a post suggestion for you! Feel free to modify it to match your voice.');
        }
    },

    // Search functionality
    handleSearch(query) {
        if (query.length > 2) {
            this.performAISearch(query);
        }
    },

    performAISearch(query) {
        // Simulate AI-powered search with smart suggestions
        const suggestions = [
            'People interested in "' + query + '"',
            'Worlds related to "' + query + '"',
            'Recent posts about "' + query + '"',
            'AI-generated content for "' + query + '"'
        ];
        this.displaySearchSuggestions(suggestions);
    },

    displaySearchSuggestions(suggestions) {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (suggestionsContainer) {
            suggestionsContainer.innerHTML = suggestions.map(suggestion => 
                `<div class="suggestion-item p-2 hover:bg-white/10 cursor-pointer rounded">${suggestion}</div>`
            ).join('');
            suggestionsContainer.classList.remove('hidden');
        }
    },

    // Animation utilities
    initializeAnimations() {
        // Initialize Anime.js animations
        if (typeof anime !== 'undefined') {
            this.setupPageTransitions();
            this.setupHoverEffects();
            this.setupScrollAnimations();
        }
    },

    setupPageTransitions() {
        // Fade in page content
        anime({
            targets: '.page-content',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800,
            easing: 'easeOutQuart'
        });
    },

    setupHoverEffects() {
        // Glass card hover effects
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                anime({
                    targets: card,
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(107, 70, 193, 0.2)',
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });

            card.addEventListener('mouseleave', () => {
                anime({
                    targets: card,
                    scale: 1,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });
        });
    },

    setupScrollAnimations() {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        easing: 'easeOutQuart'
                    });
                }
            });
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    },

    animateModalOpen(modal) {
        const content = modal.querySelector('.modal-content');
        if (content && typeof anime !== 'undefined') {
            anime({
                targets: content,
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 400,
                easing: 'easeOutBack'
            });
        }
    },

    animateModalClose(modal, callback) {
        const content = modal.querySelector('.modal-content');
        if (content && typeof anime !== 'undefined') {
            anime({
                targets: content,
                scale: [1, 0.8],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInBack',
                complete: callback
            });
        } else if (callback) {
            callback();
        }
    },

    // User preferences
    loadUserPreferences() {
        const savedTheme = localStorage.getItem('preferredTheme');
        if (savedTheme) {
            document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        }

        const aiLevel = localStorage.getItem('aiCustomizationLevel');
        if (aiLevel) {
            this.aiCustomizationLevel = aiLevel;
        }
    },

    // AI Assistant startup
    startAIAssistants() {
        // Simulate AI assistants starting up
        setTimeout(() => {
            this.addAIMessage('AI systems are now online and ready to enhance your social experience!');
        }, 2000);
    },

    // Utility functions
    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    },

    getTimeAgo(timestamp) {
        // Simple time ago formatter
        return timestamp;
    },

    generateAIScore() {
        return (Math.random() * 0.5 + 0.5).toFixed(2);
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    AIPoweredSocial.init();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIPoweredSocial;
}