# Cloud Run Vue Template

這是一個基於 Vite 和 Vue 2.0 構建的前端專案模板，專為在 Cloud Run 等容器化環境中部署而設計。

## 特性

- Vue 2.0 全功能集成
- Vite 構建系統，快速啟動和熱模塊替換
- 預配置的 Docker 支持，包括 Nginx 服務配置
- 多環境配置，包括開發、生產、測試和 UAT
- 可執行的啟動腳本用於 Docker 容器中的 Nginx

## 開始使用

### 先決條件

確保你安裝了 Node.js 和 Yarn。這個專案使用 Yarn 作為包管理器。

```bash
yarn --version
```

### 安裝

克隆倉庫到本地並安裝依賴項：

```bash
git clone https://your-repository-url.git
cd cloud_run_vue_template
yarn install
```

### 開發模式

啟動開發服務器：

```bash
yarn dev
```

你現在可以在瀏覽器中打開 `http://localhost:3000` 來查看應用。

### 構建和運行生產版本

構建你的應用：

```bash
yarn build
```

構建的靜態文件將位於 `dist` 目錄中。

### Docker 支持

要構建 Docker 鏡像並在容器中運行它，請使用：

```bash
docker build -t cloud-run-vue-app .
docker run -p 80:80 cloud-run-vue-app
```

現在你可以訪問 `http://localhost` 來查看你的應用。

## 配置

專案包括以下配置文件：

- `.env.development`：開發環境變數
- `.env.production`：生產環境變數
- `.env.test`：測試環境變數
- `.env.uat`：用戶接受測試環境變數

