// 目的地数据
const destinationsData = [
    {
        title: 'K   yoto, Japan',
        image: 'images/destinations/kyoto.jpg',
        description: 'Perfect blend of traditional and modern Japanese life',
        region: 'asia',
        type: 'culture',
        tags: ['Cultural Heritage', 'Temples', 'Kimono Experience']
    },
    {
        title: 'Swiss Alps',
        image: 'images/destinations/swiss-alps.jpg',
        description: 'Explore magnificent mountain landscapes and exciting outdoor activities',
        region: 'europe',
        type: 'nature',
        tags: ['Hiking', 'Skiing', 'Natural Scenery']
    },
    {
        title: 'Maldives',
        image: 'images/destinations/maldives.jpg',
        description: 'World-class island resort experience',
        region: 'asia',
        type: 'leisure',
        tags: ['Beach', 'Resort', 'Water Sports']
    },
    {
        title: 'Grand Canyon',
        image: 'images/destinations/grand-canyon.jpg',
        description: 'Experience nature\'s magnificent craftsmanship',
        region: 'americas',
        type: 'nature',
        tags: ['Natural Wonder', 'Hiking', 'Photography']
    },
    {
        title: 'Egyptian Pyramids',
        image: 'images/destinations/pyramids.jpg',
        description: 'Explore the mysterious relics of ancient civilization',
        region: 'africa',
        type: 'culture',
        tags: ['History', 'Archaeology', 'Culture']
    },
    {
        title: 'New Zealand',
        image: 'images/destinations/new-zealand.jpg',
        description: 'Experience breathtaking natural beauty and adventure activities',
        region: 'oceania',
        type: 'adventure',
        tags: ['Nature', 'Adventure', 'Outdoor']
    },
    {
        title: 'Bali',
        image: 'images/destinations/bali.jpg',
        description: 'Explore the cultural and natural beauty of this tropical paradise',
        region: 'asia',
        type: 'leisure',
        tags: ['Beach', 'Culture', 'Resort']
    },
    {
        title: 'Paris',
        image: 'images/destinations/paris.jpg',
        description: 'Experience the unique charm of the city of art and romance',
        region: 'europe',
        type: 'culture',
        tags: ['Art', 'Cuisine', 'Architecture']
    }
];

// 加载目的地卡片
function loadDestinations(data = destinationsData) {
    const grid = document.querySelector('.destinations-grid');
    grid.innerHTML = ''; // 清空现有内容
    
    data.forEach(dest => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.title}">
            <div class="destination-info">
                <h3>${dest.title}</h3>
                <p>${dest.description}</p>
                <div class="tags">
                    ${dest.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 搜索和筛选功能
function initializeFilters() {
    const searchInput = document.getElementById('searchDestination');
    const regionFilter = document.getElementById('regionFilter');
    const typeFilter = document.getElementById('typeFilter');
    
    function filterDestinations() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRegion = regionFilter.value;
        const selectedType = typeFilter.value;
        
        const filteredData = destinationsData.filter(dest => {
            const matchesSearch = dest.title.toLowerCase().includes(searchTerm) ||
                                dest.description.toLowerCase().includes(searchTerm);
            const matchesRegion = !selectedRegion || dest.region === selectedRegion;
            const matchesType = !selectedType || dest.type === selectedType;
            
            return matchesSearch && matchesRegion && matchesType;
        });
        
        loadDestinations(filteredData);
    }
    
    // 添加事件监听器
    searchInput.addEventListener('input', filterDestinations);
    regionFilter.addEventListener('change', filterDestinations);
    typeFilter.addEventListener('change', filterDestinations);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    loadDestinations();
    initializeFilters();
}); 