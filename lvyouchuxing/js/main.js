// 导航栏切换
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // 添加汉堡菜单动画
        const spans = this.getElementsByTagName('span');
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// 目的地数据
const destinations = [
    {
        title: 'Bali',
        image: 'images/destinations/bali.jpg',
        description: 'Most popular tourist destination in Indonesia'
    },
    {
        title: 'Beijing',
        image: 'images/destinations/beijing.jpg',
        description: 'China\'s capital, perfect blend of ancient civilization and modernization'
    },
    {
        title: 'Tokyo',
        image: 'images/destinations/tokyo.jpg',
        description: 'Japan\'s largest city, where tradition meets technology'
    },
    {
        title: 'Paris',
        image: 'images/destinations/paris.jpg',
        description: 'City of romance, art, and culinary excellence'
    }
];

// 动态加载目的地
function loadDestinations() {
    const grid = document.querySelector('.destination-grid');
    destinations.forEach(dest => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.title}">
            <div class="destination-info">
                <h3>${dest.title}</h3>
                <p>${dest.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 页面滚动动画
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(position < screenPosition) {
            element.classList.add('active');
        }
    });
});

// 添加攻略数据
const guides = [
    {
        title: 'Tokyo 7-Day Complete Guide',
        image: 'images/guides/tokyo-guide.jpg',
        description: 'Detailed Tokyo travel planning, including accommodation, transportation, and attractions',
        author: {
            name: 'John',
            avatar: 'images/avatars/avatar-1.jpg'
        },
        date: '2024-03-15'
    },
    {
        title: 'Bali In-Depth Guide',
        image: 'images/destinations/bali.jpg',
        description: 'Explore the most beautiful beaches and cultural sites in Bali',
        author: {
            name: 'Sarah',
            avatar: 'images/avatars/avatar-2.jpg'
        },
        date: '2024-03-10'
    },
    {
        title: 'Beijing Ancient Architecture Tour',
        image: 'images/destinations/beijing.jpg',
        description: 'Explore Beijing\'s classic architectural complexes and cultural heritage',
        author: {
            name: 'Michael',
            avatar: 'images/avatars/avatar-3.jpg'
        },
        date: '2024-03-08'
    },
    {
        title: 'Swiss Alps Hiking Guide',
        image: 'images/destinations/swiss-alps.jpg',
        description: 'Explore the most beautiful hiking trails in the Alps',
        author: {
            name: 'Emma',
            avatar: 'images/avatars/avatar-4.jpg'
        },
        date: '2024-03-05'
    },
    {
        title: 'Maldives Honeymoon Guide',
        image: 'images/destinations/maldives.jpg',
        description: 'Complete Maldives vacation guide, how to choose islands and water villas',
        author: {
            name: 'Ocean',
            avatar: 'images/avatars/avatar-5.jpg'
        },
        date: '2024-03-03'
    }
];

// 加载攻略内容
function loadGuides() {
    const slider = document.querySelector('.guides-slider');
    if (!slider) return; // 如果不在攻略页面，直接返回

    guides.forEach(guide => {
        const card = document.createElement('div');
        card.className = 'guide-card';
        card.innerHTML = `
            <img src="${guide.image}" alt="${guide.title}">
            <div class="guide-card-content">
                <h3>${guide.title}</h3>
                <p>${guide.description}</p>
                <div class="author">
                    <img src="${guide.author.avatar}" alt="${guide.author.name}">
                    <span>${guide.author.name}</span>
                </div>
                <div class="date">${guide.date}</div>
            </div>
        `;
        slider.appendChild(card);
    });
}

// 轮播卡片数据
const carouselData = [
    {
        title: 'Romantic Paris',
        image: 'images/destinations/paris.jpg',
        description: 'Experience the perfect blend of art and romance'
    },
    {
        title: 'Tokyo Explorer',
        image: 'images/destinations/tokyo.jpg',
        description: 'Unique charm of modernity and tradition'
    },
    {
        title: 'Maldives Getaway',
        image: 'images/destinations/maldives.jpg',
        description: 'Enjoy the tranquility of island life'
    },
    {
        title: 'Swiss Alps',
        image: 'images/destinations/swiss-alps.jpg',
        description: 'Magnificent mountain landscapes'
    },
    {
        title: 'Kyoto Heritage',
        image: 'images/destinations/kyoto.jpg',
        description: 'Experience traditional Japanese culture'
    }
];

// 加载轮播卡片
function loadCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    carouselData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="carousel-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        track.appendChild(card);
    });
}

function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!track || !prevBtn || !nextBtn) return;

    const cardWidth = 300 + 32; // 卡片宽度 + 间距

    function slide(direction) {
        const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', () => slide('prev'));
    nextBtn.addEventListener('click', () => slide('next'));

    // 检查按钮显示状态
    function updateButtons() {
        const isAtStart = track.scrollLeft <= 0;
        const isAtEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 5;
        
        prevBtn.style.opacity = isAtStart ? '0.5' : '1';
        prevBtn.style.cursor = isAtStart ? 'not-allowed' : 'pointer';
        nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
        nextBtn.style.cursor = isAtEnd ? 'not-allowed' : 'pointer';
    }

    track.addEventListener('scroll', updateButtons);
    updateButtons(); // 初始化按钮状态
}

// 更新初始化函数
document.addEventListener('DOMContentLoaded', function() {
    loadDestinations();
    loadGuides();
    loadCarousel();
    initializeCarousel();
}); 