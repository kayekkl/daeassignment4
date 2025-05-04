document.addEventListener('DOMContentLoaded', function() {
    // 獲取DOM元素
    const searchbar = document.getElementById('searchbar');
    const sortButton = document.getElementById('sort-button');
    const yogaList = document.getElementById('yoga-list');

    // 設置排序方向 (true: A-Z, false: Z-A)
    let ascendingOrder = true;

    // 初始化頁面
    renderYogaList(yogaPoses);

    // 事件監聽器
    searchbar.addEventListener('ionInput', handleSearch);
    sortButton.addEventListener('click', toggleSortOrder);

    // 搜尋處理函數
    function handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredPoses = yogaPoses.filter(pose =>
            pose.name.toLowerCase().includes(searchTerm) ||
            pose.name_en.toLowerCase().includes(searchTerm)
        );
        renderYogaList(filteredPoses);
    }

    // 切換排序方向
    function toggleSortOrder() {
        ascendingOrder = !ascendingOrder;
        renderYogaList(yogaPoses);
        updateSortButton();
    }

    // 更新排序按鈕的圖示與文字
    function updateSortButton() {
        sortButton.innerHTML = ''; // 清空按鈕內容

        const icon = document.createElement('ion-icon');
        icon.setAttribute('name', ascendingOrder ? 'arrow-up-outline' : 'arrow-down-outline');
        icon.setAttribute('slot', 'start');

        const text = document.createElement('span');
        text.textContent = ascendingOrder ? '按字母排序 (A-Z)' : '按字母排序 (Z-A)';

        sortButton.appendChild(icon);
        sortButton.appendChild(text);
    }

    // 渲染瑜伽動作列表
    function renderYogaList(poses) {
        yogaList.innerHTML = '';

        if (poses.length === 0) {
            yogaList.innerHTML = `
                <ion-item>
                    <ion-label>
                        <h2>沒有符合條件的結果</h2>
                        <p>請嘗試其他搜尋條件</p>
                    </ion-label>
                </ion-item>
            `;
            return;
        }

        // 根據當前排序方向進行排序
        poses.sort((a, b) => 
            ascendingOrder ? a.name_en.localeCompare(b.name_en) : b.name_en.localeCompare(a.name_en)
        );

        poses.forEach(pose => {
            const item = document.createElement('ion-item');
            item.setAttribute('button', true);
            item.setAttribute('detail', false);
            item.setAttribute('lines', 'none');

            item.addEventListener('click', () => {
                window.location.href = `detail.html?id=${pose.id}`;
            });

            item.innerHTML = `
                <div class="yoga-item-content">
                    <img src="${pose.image}" alt="${pose.name_en}" class="yoga-thumbnail">
                    <div class="yoga-info">
                        <div class="yoga-name">${pose.name_en}</div>
                    </div>
                </div>
            `;

            yogaList.appendChild(item);
        });
    }
});