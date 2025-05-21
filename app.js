// 电子菜单应用逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const mainMenuContainer = document.getElementById('main-menu');
    const detailViewContainer = document.getElementById('detail-view');
    const menuCategoriesContainer = document.getElementById('menu-categories');
    const menuItemsContainer = document.getElementById('menu-items');
    const categoryTitleElement = document.getElementById('category-title');
    const backButton = document.getElementById('back-button');
    
    // 初始化加载菜单类别
    function loadMenuCategories() {
        menuCategoriesContainer.innerHTML = '';
        
        menuData.categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'col';
            categoryCard.innerHTML = `
                <div class="card category-card shadow-sm" data-category-id="${category.id}">
                    <img src="${category.image}" class="card-img-top category-image" alt="${category.name}">
                    <div class="card-body">
                        <h5 class="card-title">${category.name}</h5>
                        <p class="card-text">${category.description}</p>
                    </div>
                </div>
            `;
            
            // 添加点击事件，显示该类别的菜品
            categoryCard.querySelector('.category-card').addEventListener('click', function() {
                const categoryId = parseInt(this.dataset.categoryId);
                showCategoryDetails(categoryId);
            });
            
            menuCategoriesContainer.appendChild(categoryCard);
        });
    }
    
    // 显示类别详情
    function showCategoryDetails(categoryId) {
        // 找到对应的类别
        const category = menuData.categories.find(cat => cat.id === categoryId);
        if (!category) return;
        
        // 设置类别标题
        categoryTitleElement.textContent = category.name;
        
        // 加载该类别的菜品
        loadMenuItems(categoryId);
        
        // 切换视图
        mainMenuContainer.style.display = 'none';
        detailViewContainer.style.display = 'block';
        
        // 显示菜品列表
        menuItemsContainer.style.display = 'block';
        
        // 滚动到顶部
        window.scrollTo(0, 0);
    }
    
    // 加载菜品
    function loadMenuItems(categoryId) {
        menuItemsContainer.innerHTML = '';
        
        // 筛选出该类别的菜品
        const items = menuData.items.filter(item => item.categoryId === categoryId);
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <div class="card border-0 h-100">
                    <div class="card-img-container">
                        <img src="${item.image}" class="card-img-top menu-item-image" alt="${item.name}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="card-title mb-0">${item.name}</h5>
                            <span class="menu-item-price">¥${item.price}</span>
                        </div>
                        <p class="menu-item-description mb-2">${item.description}</p>
                        <p class="small" style="color: #e0e0e0;"><strong>配料：</strong>${item.ingredients}</p>
                    </div>
                </div>
            `;
            
            // 添加点击事件处理
            menuItem.addEventListener('click', function(e) {
                // 菜品点击事件处理
                
                // 在移动设备上优化滚动体验
                if (window.innerWidth <= 768) {
                    // 只有当点击的是卡片而不是滚动操作时才执行
                    if (e.target.closest('.card-body')) {
                        // 计算元素顶部到视口顶部的距离
                        const rect = this.getBoundingClientRect();
                        // 只有当元素距离顶部较远时才滚动
                        if (Math.abs(rect.top) > 50) {
                            this.scrollIntoView({behavior: 'smooth'});
                        }
                    }
                }
            });
            
            menuItemsContainer.appendChild(menuItem);
        });
        
        // 添加底部返回菜单按钮
        const bottomBackButton = document.createElement('div');
        bottomBackButton.className = 'mt-4 mb-5';
        bottomBackButton.innerHTML = `
            <button class="back-button btn btn-outline-secondary">
                <i class="bi bi-arrow-left"></i> 返回菜单
            </button>
        `;
        
        // 添加点击事件，返回主菜单
        bottomBackButton.querySelector('.back-button').addEventListener('click', function() {
            detailViewContainer.style.display = 'none';
            mainMenuContainer.style.display = 'block';
        });
        
        menuItemsContainer.appendChild(bottomBackButton);
        
        // 在移动设备上，添加滚动监听以优化单屏显示体验
        if (window.innerWidth <= 768) {
            // 移除之前可能存在的滚动监听器
            window.removeEventListener('scroll', handleMenuScroll);
            // 添加新的滚动监听器
            window.addEventListener('scroll', handleMenuScroll);
        }
    }
    
    // 处理菜单滚动，优化移动端单屏显示体验
    function handleMenuScroll() {
        // 仅在详情页面显示时处理
        if (detailViewContainer.style.display === 'none') return;
        
        const menuItems = document.querySelectorAll('.menu-item');
        if (menuItems.length === 0) return;
        
        // 只有当用户停止滚动一段时间后才考虑自动对齐
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            // 只有当滚动几乎停止时才检查是否需要对齐
            if (!isScrolling) {
                // 找出当前在视口中最接近顶部的菜单项
                let closestItem = null;
                let closestDistance = Infinity;
                
                menuItems.forEach(item => {
                    const rect = item.getBoundingClientRect();
                    const distance = Math.abs(rect.top);
                    
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestItem = item;
                    }
                });
                
                // 只有当菜单项非常接近顶部但又不完全在顶部时才进行微调
                if (closestItem && closestDistance > 5 && closestDistance < 50) {
                    isScrolling = true;
                    closestItem.scrollIntoView({behavior: 'smooth'});
                    setTimeout(() => { isScrolling = false; }, 500);
                }
            }
        }, 300); // 等待用户停止滚动300毫秒后再考虑对齐
    }
    
    // 滚动状态标志，防止滚动事件重复触发
    let isScrolling = false;
    // 滚动定时器，用于检测滚动停止
    let scrollTimer = null;
    
    // 返回按钮点击事件
    backButton.addEventListener('click', function() {
        detailViewContainer.style.display = 'none';
        mainMenuContainer.style.display = 'block';
    });
    
    // 初始化加载
    loadMenuCategories();
});