document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="http"]');
    const excludedHosts = ["127.0.0.1", "localhost", "class-scheduling.doc.api-fy.cn"];

    links.forEach(link => {
        try {
            // 提取链接的主机名
            const url = new URL(link.href);
            const hostname = url.hostname;

            // 如果主机名不在排除列表中，则设置为新标签页打开
            if (!excludedHosts.includes(hostname)) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer");
            }
        } catch (error) {
            console.error("Invalid URL:", link.href, error);
        }
    });
});