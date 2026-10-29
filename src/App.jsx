import React, { useEffect, useMemo, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
  useParams,
  useLocation,
} from "react-router";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  CreditCard,
  Database,
  FileCheck2,
  FileText,
  Filter,
  Globe2,
  Headphones,
  Layers3,
  LockKeyhole,
  Menu,
  Minus,
  MonitorCog,
  Network,
  PackageCheck,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Workflow,
  X,
  Zap,
  Cloud,
  Plug,
  Smartphone,
  Compass,
  Server,
  LayoutDashboard,
  ReceiptText,
  Bell,
  UserRound,
} from "lucide-react";
import { categories, services, formatMoney } from "./data.js";

const PaypalIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 256 302" {...props}>
    <path fill="#27346A" d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.39 13.39 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971l-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221c.366-1.873.683-3.696.957-5.477q-2.334-1.236 0 0c3.671-23.407-.025-39.34-12.686-53.765"/><path fill="#27346A" d="M102.397 68.84a11.7 11.7 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a102 102 0 0 1 6.177 1.182a90 90 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287c3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.72 11.72 0 0 1 6.509-8.74"/><path fill="#2790C3" d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48l9.173-58.136l.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55c4.503-23.15 2.173-42.478-9.739-56.054c-3.613-4.112-8.1-7.508-13.327-10.28c-.283 1.79-.59 3.604-.957 5.477"/><path fill="#1F264F" d="M216.952 72.128a90 90 0 0 0-5.818-1.49a110 110 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.6 11.6 0 0 0-5.053 1.149a11.68 11.68 0 0 0-6.51 8.74l-15.582 98.798l-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221c.367-1.873.675-3.688.958-5.477q-4.682-2.47-10.14-4.279a83 83 0 0 0-2.77-.865"/>
  </svg>
);

const AliPayIcon = (props) => (
  <svg
    fill="#1677FF"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Alipay</title>
    <path d="M19.695 15.07c3.426 1.158 4.203 1.22 4.203 1.22V3.846c0-2.124-1.705-3.845-3.81-3.845H3.914C1.808.001.102 1.722.102 3.846v16.31c0 2.123 1.706 3.845 3.813 3.845h16.173c2.105 0 3.81-1.722 3.81-3.845v-.157s-6.19-2.602-9.315-4.119c-2.096 2.602-4.8 4.181-7.607 4.181-4.75 0-6.361-4.19-4.112-6.949.49-.602 1.324-1.175 2.617-1.497 2.025-.502 5.247.313 8.266 1.317a16.796 16.796 0 0 0 1.341-3.302H5.781v-.952h4.799V6.975H4.77v-.953h5.81V3.591s0-.409.411-.409h2.347v2.84h5.744v.951h-5.744v1.704h4.69a19.453 19.453 0 0 1-1.986 5.06c1.424.52 2.702 1.011 3.654 1.333m-13.81-2.032c-.596.06-1.71.325-2.321.869-1.83 1.608-.735 4.55 2.968 4.55 2.151 0 4.301-1.388 5.99-3.61-2.403-1.182-4.438-2.028-6.637-1.809" />
  </svg>
);

const WechatPayIcon = (props) => (
  <svg
    fill="#07C160"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>WeChat</title>
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
  </svg>
);

const iconMap = {
  layers: Layers3,
  network: Network,
  chart: BarChart3,
  globe: Globe2,
  cloud: Cloud,
  database: Database,
  workflow: Workflow,
  compass: Compass,
  plug: Plug,
  smartphone: Smartphone,
  shield: ShieldCheck,
};
const storage = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  },
};
const seedOrders = [];

function useShop() {
  const [cart, setCart] = useState(() => storage.get("yunxu-cart", []));
  const [orders, setOrders] = useState(() =>
    storage.get("yunxu-orders", seedOrders),
  );
  useEffect(() => storage.set("yunxu-cart", cart), [cart]);
  useEffect(() => storage.set("yunxu-orders", orders), [orders]);
  const add = (id, qty = 1) =>
    setCart((old) => {
      const found = old.find((i) => i.id === id);
      return found
        ? old.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
        : [...old, { id, qty }];
    });
  const setQty = (id, qty) =>
    setCart((old) =>
      qty <= 0
        ? old.filter((i) => i.id !== id)
        : old.map((i) => (i.id === id ? { ...i, qty } : i)),
    );
  const remove = (id) => setCart((old) => old.filter((i) => i.id !== id));
  const clear = () => setCart([]);
  const cartCount = cart.reduce((n, i) => n + i.qty, 0);
  const total = cart.reduce(
    (n, i) => n + (services.find((s) => s.id === i.id)?.price || 0) * i.qty,
    0,
  );
  const createOrder = (customer, paymentMethod) => {
    const items = cart.map((i) => {
      const s = services.find((x) => x.id === i.id);
      return { ...i, title: s.title, price: s.price, unit: s.unit };
    });
    const order = {
      id: `YX${Date.now().toString().slice(-10)}`,
      items,
      total,
      customer,
      paymentMethod,
      status: "待支付",
      createdAt: new Date().toLocaleString("zh-CN", { hour12: false }),
      paidAt: "",
    };
    setOrders((old) => [order, ...old]);
    clear();
    return order;
  };
  const payOrder = (id) =>
    setOrders((old) =>
      old.map((o) =>
        o.id === id
          ? {
              ...o,
              status: "已支付",
              paidAt: new Date().toLocaleString("zh-CN", { hour12: false }),
            }
          : o,
      ),
    );
  return {
    cart,
    orders,
    add,
    setQty,
    remove,
    clear,
    cartCount,
    total,
    createOrder,
    payOrder,
  };
}

function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0">
      <div className={`${light ? 'text-white' : 'text-[#009999]'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130 22"
          height="24"
          aria-label="Siemens AG"
        >
          <path
            fill="currentColor"
            d="M7.97 0q1.951 0 5.644.752v3.92q-2.746-1.147-5.102-1.147-3.318-.001-3.318 1.91 0 .713.67 1.165.555.365 3.064 1.545 3.609 1.677 4.806 2.917 1.42 1.472 1.421 3.806 0 3.354-2.786 5.116-2.258 1.429-5.853 1.428-3.036 0-6.116-.751v-4.075q3.325 1.095 5.884 1.095 3.534 0 3.534-1.954a1.63 1.63 0 0 0-.515-1.224q-.527-.525-2.698-1.459-3.894-1.675-5.075-2.856Q0 8.628 0 6.253q0-3.061 2.229-4.664Q4.432-.001 7.97 0m114.337 0q1.991 0 5.155.663l.487.089v3.92q-2.748-1.147-5.116-1.147-3.303-.001-3.302 1.91 0 .713.666 1.165.53.351 3.08 1.545 3.583 1.677 4.791 2.917 1.423 1.472 1.422 3.806 0 3.354-2.772 5.116-2.272 1.429-5.866 1.428a25.7 25.7 0 0 1-6.118-.751v-4.075q3.297 1.095 5.886 1.095 3.534 0 3.533-1.954 0-.729-.5-1.224-.529-.525-2.712-1.459-3.882-1.66-5.076-2.856-1.529-1.545-1.528-3.95c0-2.03.74-3.58 2.228-4.65Q118.766 0 122.307 0M53.92.359l4.962 13.185L63.968.36h6.784v20.636h-5.223V6.384l-5.783 14.82H56.33L50.66 6.384v14.61h-3.881V.36zm-30.145 0v20.636h-5.509V.359zm19.18 0V4.09h-8.82v4.66h7.677v3.404h-7.676v4.898h9.046v3.942H28.827V.359zm46.978 0V4.09h-8.819v4.66h7.677v3.404h-7.677v4.898h9.047v3.942H75.805V.359zm10.237 0 6.774 13.814V.359h3.88v20.636h-6.203l-6.954-14v14h-3.881V.359z"
          />
        </svg>
      </div>
    </Link>
  );
}

function Header({ shop }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setMobileOpen(false), [location.pathname]);
  const links = [
    ["/", "首页"],
    ["/services", "服务商城"],
    ["/orders", "我的订单"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-[14px] transition ${isActive ? "font-semibold text-blue-600" : "text-slate-600 hover:text-slate-950"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            aria-label="购物车"
          >
            <ShoppingCart size={19} />
            {shop.cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 grid min-w-5 h-5 place-items-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                {shop.cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/services"
            className="hidden rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 sm:inline-flex"
          >
            浏览服务 <ArrowRight size={15} className="ml-2" />
          </Link>
          <button
            className="grid size-10 place-items-center rounded-xl border border-slate-200 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="打开菜单"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-3 md:hidden">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className="block rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-[#0b1830] text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
            以专业技术服务连接业务与数据，帮助企业构建可靠、可持续的数字化能力。
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck size={15} /> 企业级交付 · 规范化服务
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold">服务分类</p>
          <div className="space-y-3 text-sm text-slate-400">
            <Link
              className="block hover:text-white"
              to="/services?category=software"
            >
              软件开发
            </Link>
            <Link
              className="block hover:text-white"
              to="/services?category=integration"
            >
              系统集成
            </Link>
            <Link
              className="block hover:text-white"
              to="/services?category=data"
            >
              数据处理
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold">客户服务</p>
          <div className="space-y-3 text-sm text-slate-400">
            <Link className="block hover:text-white" to="/orders">
              订单查询
            </Link>
            <Link className="block hover:text-white" to="/cart">
              购物车
            </Link>
            <a
              className="block hover:text-white"
              href="mailto:service@example.com"
            >
              联系顾问
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold">服务保障</p>
          <div className="space-y-3 text-sm text-slate-400">
            <p>需求范围清晰</p>
            <p>交付过程可追踪</p>
            <p>服务条款可确认</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <div className="flex flex-row flex-wrap leading-[20px]">
            {/* 西门子数字化工业软件 */}
            <div className="mr-[40px] mb-[15px]">
              <a
                href="https://www.sw.siemens.com/en-US/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-[20px] text-[#9999a9] transition-colors hover:text-[#00ffb9] focus:text-[#00ffb9] active:text-[#00ffb9]"
              >
                <span>西门子数字化工业软件</span>
              </a>
            </div>

            {/* 法律与备案链接 */}
            <nav>
              <ul className="flex list-none flex-row flex-wrap">
                <li>
                  <a
                    href="https://www.siemens.com/cn/zh/general/privacy-notice.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-[20px] mb-[15px] block text-[#9999a9] no-underline transition-colors hover:text-[#00ffb9] focus:text-[#00ffb9] active:text-[#00ffb9]"
                    data-ste-link-id="0000096801.app:3911173067.neral/privacy-notice.html:0000000045"
                  >
                    隐私政策
                  </a>
                </li>

                <li>
                  <a
                    href="https://new.siemens.com/cn/zh/general/cookie-notice.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-[20px] mb-[15px] block text-[#9999a9] no-underline transition-colors hover:text-[#00ffb9] focus:text-[#00ffb9] active:text-[#00ffb9]"
                    data-ste-link-id="0000096801.app:4112875433.eneral/cookie-notice.html:0952189513"
                  >
                    Cookie政策
                  </a>
                </li>

                <li>
                  <a
                    href="https://new.siemens.com/cn/zh/general/terms-of-use.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-[20px] mb-[15px] block text-[#9999a9] no-underline transition-colors hover:text-[#00ffb9] focus:text-[#00ffb9] active:text-[#00ffb9]"
                    data-ste-link-id="0000096801.app:1648802033.general/terms-of-use.html:0000000045"
                  >
                    使用条款
                  </a>
                </li>

                <li>
                  <a
                    href="http://beian.miit.gov.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-[20px] mb-[15px] block text-[#9999a9] no-underline transition-colors hover:text-[#00ffb9] focus:text-[#00ffb9] active:text-[#00ffb9]"
                    data-ste-link-id="0000096801.app:2118828298.http://beian.miit.gov.cn/:2504572964"
                  >
                    沪ICP备14037484号-17
                  </a>
                </li>

                {/* <li>
                  <a
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502040638"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-[20px] mb-[15px] block text-[#9999a9] no-underline transition-colors hover:text-[#00ffb9] focus:text-[#00ffb9] active:text-[#00ffb9]"
                    data-ste-link-id="0000096801.app:0719911706.recordcode=11010502040638:0573777897"
                  >
                    京公网安备 11010502040638号
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SieFooter() {
  return (
    <footer class="pb-0" style="background-color: #000028;">
      <section class="fullwidth-section">
        <div class="section-container">
          <div class="relative h-[100px]">
            <div class="absolute left-0 top-0 flex h-[100px] w-[400px]">
              <figure class="h-[100px] w-[100px]">
                <img
                  class="h-[100px] w-[100px]"
                  src="https://sie-vep-static.oss-cn-shanghai.aliyuncs.com/rl2026/pc/register/finish-qr.png"
                  alt=""
                />
              </figure>

              <div class="h-[72px] grow pl-[20px] pt-[15px] pb-[13px] text-[14px] font-normal leading-[24px] text-white">
                <p class="text-[16px] leading-[24px]">关注西门子工业软件</p>
                <p class="text-[16px] leading-[24px]">官方微信公众号</p>
                <p class="text-[16px] leading-[24px]">
                  助转型者有力，让有力者前行
                </p>
              </div>
            </div>

            <div class="absolute left-[440px] flex h-[20px] gap-[120px] pt-[40px] text-[16px] font-normal leading-[20px] text-white">
              <div class="group">
                <div class="h-[16px] w-[220px] text-left text-[16px] font-normal leading-[16px]">
                  西门子产品咨询电话：
                </div>

                <a
                  class="relative mt-[10px] block h-[16px] text-[16px] leading-[16px] text-[#00CCCC] underline group-hover:text-[#03FFB9]"
                  href="tel:400-120-0052"
                >
                  <span
                    class="before:mr-0 before:inline-block before:translate-y-[3px] before:text-[20px] before:font-normal before:not-italic before:content-['\e92a']"
                    style="font-family: 'Siemens Web Icons';"
                  ></span>
                  400-120-0052
                </a>
              </div>

              <div class="group">
                <div class="h-[16px] w-[220px] text-left text-[16px] font-normal leading-[16px]">
                  票务咨询邮箱：
                </div>

                <a
                  class="relative mt-[10px] block h-[16px] text-[16px] leading-[16px] text-[#00CCCC] underline group-hover:text-[#03FFB9] before:mr-[4px] before:mb-[-3px] before:inline-block before:h-[14px] before:w-[16px] before:bg-[#00CCCC] before:content-[''] before:[mask-image:url('https://sie-vep-static.oss-cn-shanghai.aliyuncs.com/av2024/footer_email.svg')] before:[mask-size:100%] before:[mask-repeat:no-repeat] before:[mask-position:center] before:group-hover:bg-[#03FFB9]"
                  href="mailto:RealizeLIVE@think4event.com"
                >
                  RealizeLIVE@think4event.com
                </a>
              </div>
            </div>
          </div>

          <div class="my-[29px] h-px w-full border-t border-[#333353]"></div>

          <div class="leading-[20px]">
            <div class="footer-legal">
              <a
                href="https://www.sw.siemens.com/en-US/"
                target="_blank"
                class="footer-tinylink"
              >
                <span>西门子数字化工业软件</span>
              </a>
            </div>

            <nav class="footer-legalnav">
              <ul>
                <li>
                  <a
                    href="https://www.siemens.com/cn/zh/general/privacy-notice.html"
                    target="_blank"
                    class="footer-tinylink mb-[30px]"
                    data-ste-link-id="0000096801.app:3911173067.neral/privacy-notice.html:0000000045"
                  >
                    <span>隐私政策</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://new.siemens.com/cn/zh/general/cookie-notice.html"
                    target="_blank"
                    class="footer-tinylink mb-[30px]"
                    data-ste-link-id="0000096801.app:4112875433.eneral/cookie-notice.html:0952189513"
                  >
                    <span>Cookie政策</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://new.siemens.com/cn/zh/general/terms-of-use.html"
                    target="_blank"
                    class="footer-tinylink mb-[30px]"
                    data-ste-link-id="0000096801.app:1648802033.general/terms-of-use.html:0000000045"
                  >
                    <span>使用条款</span>
                  </a>
                </li>

                <li>
                  <a
                    href="http://beian.miit.gov.cn/"
                    target="_blank"
                    class="footer-tinylink mb-[30px]"
                    data-ste-link-id="0000096801.app:2118828298.http://beian.miit.gov.cn/:2504572964"
                  >
                    <span>京ICP备06054295号</span>
                  </a>
                </li>

                <li>
                  <a
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502040638"
                    target="_blank"
                    class="footer-tinylink mb-[30px]"
                    data-ste-link-id="0000096801.app:0719911706.recordcode=11010502040638:0573777897"
                  >
                    <span>京公网安备 11010502040638号</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, desc, action }) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-blue-600">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-[30px]">
          {title}
        </h2>
        {desc && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            {desc}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

function ServiceVisual({ service, large = false }) {
  const Icon = iconMap[service.icon] || Code2;
  const themes = {
    blue: "from-blue-500/15 to-indigo-500/5 text-blue-600",
    violet: "from-violet-500/15 to-fuchsia-500/5 text-violet-600",
    cyan: "from-cyan-500/15 to-teal-500/5 text-cyan-700",
    amber: "from-amber-500/15 to-orange-500/5 text-amber-700",
  };
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${themes[service.color] || themes.blue} ${large ? "h-56 rounded-2xl" : "h-36 rounded-t-2xl"}`}
    >
      <div className="absolute -right-6 -top-10 size-36 rounded-full border border-current/10" />
      <div className="absolute -bottom-16 -left-4 size-40 rounded-full border border-current/10" />
      <div
        className={`relative grid place-items-center rounded-2xl border border-white/70 bg-white/70 shadow-sm backdrop-blur ${large ? "size-24" : "size-[68px]"}`}
      >
        <Icon size={large ? 40 : 30} strokeWidth={1.5} />
      </div>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/80 bg-white/75 px-3 py-1 text-[11px] font-semibold text-slate-600 backdrop-blur">
        {service.categoryName}
      </span>
      {service.tag && (
        <span className="absolute right-4 top-4 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
          {service.tag}
        </span>
      )}
    </div>
  );
}

function ServiceCard({ service, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/[.06]">
      <Link to={`/services/${service.id}`}>
        <ServiceVisual service={service} />
      </Link>
      <div className="p-5">
        <Link
          to={`/services/${service.id}`}
          className="block text-[16px] font-bold text-slate-900 transition hover:text-blue-600"
        >
          {service.title}
        </Link>
        <p className="mt-2 min-h-10 text-sm leading-5 text-slate-500">
          {service.subtitle}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-[11px] text-slate-400">服务参考价</p>
            <p className="mt-1 text-xl font-bold tracking-tight text-slate-900">
              {formatMoney(service.price)}
              <span className="ml-1 text-[11px] font-normal text-slate-400">
                {service.unit}
              </span>
            </p>
          </div>
          <button
            onClick={() => onAdd(service.id)}
            className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
            title="加入购物车"
          >
            <Plus size={19} />
          </button>
        </div>
        <Link
          to={`/services/${service.id}`}
          className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500 transition group-hover:text-blue-600"
        >
          查看服务详情 <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}

function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onClose, 2600);
    return () => clearTimeout(t);
  }, [message, onClose]);
  if (!message) return null;
  return (
    <div className="fixed bottom-5 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-2xl">
      <CheckCircle2 size={17} className="text-emerald-400" />
      {message}
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white"
      >
        <X size={15} />
      </button>
    </div>
  );
}

function Home({ shop, notify }) {
  const featured = services.filter((s) => s.popular);
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#0b1830] text-white">
        <div className="soft-grid absolute inset-0 opacity-70" />
        <div className="absolute -right-24 -top-36 size-[540px] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 size-[380px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="container-shell relative grid min-h-[550px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3.5 py-2 text-xs font-medium text-blue-100">
              <Sparkles size={14} className="text-cyan-300" />{" "}
              企业数字化服务的一站式采购平台
            </div>
            <h1 className="mt-7 max-w-2xl text-[42px] font-semibold leading-[1.2] tracking-tight sm:text-5xl lg:text-[58px]">
              让技术服务
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
                更清晰，更简单。
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-300">
              从软件定制开发到系统集成、数据治理，以透明的服务范围、清晰的交付标准和可追踪的采购流程，助力企业稳步实现数字化升级。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center rounded-xl bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
              >
                探索服务目录 <ArrowRight size={17} className="ml-2" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                了解采购流程 <ArrowDownRight size={17} className="ml-2" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" />
                范围与交付明确
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" />
                订单全程可追踪
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" />
                企业级服务保障
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[490px]">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-blue-500/20 to-cyan-400/5 blur-2xl" />
            <div className="relative rounded-[26px] border border-white/15 bg-white/[.07] p-3 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[19px] bg-[#f7f9fd] p-5 text-slate-900 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">服务采购工作台</p>
                    <p className="mt-1 text-lg font-bold">数字化项目概览</p>
                  </div>
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <LayoutDashboard size={20} />
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    ["服务目录", "12 项可选服务", Layers3],
                    ["交付周期", "1–10 周可选", Clock3],
                  ].map(([a, b, I]) => (
                    <div
                      key={a}
                      className="rounded-xl border border-slate-100 bg-white p-4"
                    >
                      <I size={18} className="text-blue-600" />
                      <p className="mt-3 text-xs text-slate-400">{a}</p>
                      <p className="mt-1 text-sm font-semibold">{b}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl border border-slate-100 bg-white p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold">服务交付流程</p>
                    <span className="text-[10px] text-slate-400">
                      STANDARD PROCESS
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      ["01", "需求确认", "范围与验收标准清晰"],
                      ["02", "项目实施", "阶段进度可追踪"],
                      ["03", "交付验收", "文档与服务保障"],
                    ].map(([n, t, d], i) => (
                      <div key={n} className="flex items-center gap-3">
                        <span
                          className={`grid size-8 place-items-center rounded-lg text-xs font-bold ${i === 0 ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"}`}
                        >
                          {n}
                        </span>
                        <div className="flex-1">
                          <p className="text-xs font-semibold">{t}</p>
                          <p className="mt-0.5 text-[10px] text-slate-400">
                            {d}
                          </p>
                        </div>
                        {i < 2 && (
                          <ChevronRight size={15} className="text-slate-300" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-xl bg-blue-600 p-4 text-white">
                  <div>
                    <p className="text-xs text-blue-100">服务采购 · 统一入口</p>
                    <p className="mt-1 text-sm font-semibold">
                      从选购到交付，一步步更清晰
                    </p>
                  </div>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </div>
            <div className="absolute -left-7 top-20 hidden rounded-2xl border border-white/60 bg-white px-4 py-3 text-slate-800 shadow-xl sm:block">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="grid size-7 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                  <BadgeCheck size={16} />
                </span>
                交付标准清晰
              </div>
            </div>
            <div className="absolute -right-5 bottom-12 hidden rounded-2xl border border-white/60 bg-white px-4 py-3 text-slate-800 shadow-xl sm:block">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="grid size-7 place-items-center rounded-lg bg-violet-50 text-violet-600">
                  <FileCheck2 size={16} />
                </span>
                订单全程可追踪
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-shell grid grid-cols-2 divide-x divide-white/10 py-5 sm:grid-cols-4">
            {[
              ["12+", "标准化服务方案"],
              ["3 大", "核心服务领域"],
              ["全流程", "订单状态跟踪"],
              ["企业级", "服务交付标准"],
            ].map(([n, t]) => (
              <div key={t} className="px-4 py-2 first:pl-0 sm:px-7">
                <p className="text-xl font-bold">{n}</p>
                <p className="mt-1 text-xs text-slate-400">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="SERVICE CATEGORIES"
          title="覆盖企业数字化核心需求"
          desc="以标准化服务包降低采购沟通成本，也为后续项目实施建立清晰的范围基线。"
          action={
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              全部服务 <ArrowRight size={16} className="ml-2" />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              id: "software",
              title: "计算机软件开发",
              desc: "业务系统、门户平台与移动应用",
              icon: Code2,
              number: "01",
              bg: "bg-blue-50 text-blue-600",
            },
            {
              id: "integration",
              title: "系统集成服务",
              desc: "接口对接、云迁移与平台整合",
              icon: Network,
              number: "02",
              bg: "bg-violet-50 text-violet-600",
            },
            {
              id: "data",
              title: "数据处理服务",
              desc: "数据治理、ETL 与分析看板",
              icon: Database,
              number: "03",
              bg: "bg-cyan-50 text-cyan-700",
            },
            {
              id: "consulting",
              title: "技术支持与咨询",
              desc: "架构评估、运维支持与优化",
              icon: MonitorCog,
              number: "04",
              bg: "bg-amber-50 text-amber-700",
            },
          ].map((c) => (
            <Link
              key={c.id}
              to={`/services?category=${c.id}`}
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/[.04]"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`grid size-12 place-items-center rounded-xl ${c.bg}`}
                >
                  <c.icon size={23} />
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  {c.number}
                </span>
              </div>
              <h3 className="mt-5 font-bold text-slate-900 group-hover:text-blue-600">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{c.desc}</p>
              <div className="mt-5 flex items-center text-xs font-semibold text-slate-400 group-hover:text-blue-600">
                查看相关服务{" "}
                <ArrowRight
                  size={14}
                  className="ml-2 transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="POPULAR SERVICES"
            title="精选企业服务方案"
            desc="从高频业务场景出发，明确服务范围、参考价格和预计交付周期。"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <ServiceCard
                key={s.id}
                service={s}
                onAdd={(id) => {
                  shop.add(id);
                  notify("已加入购物车");
                }}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              浏览全部服务 <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container-shell py-16 md:py-20">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="清晰、可追踪的采购流程"
          desc="围绕企业服务的交付特点，把采购、支付与后续实施串联起来。"
        />
        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              n: "01",
              title: "选购服务",
              desc: "浏览服务范围、交付内容与参考价格。",
              icon: ShoppingBag,
            },
            {
              n: "02",
              title: "确认订单",
              desc: "填写企业与联系人信息，核对采购明细。",
              icon: FileText,
            },
            {
              n: "03",
              title: "完成支付",
              desc: "选择支付方式并确认订单支付状态。",
              icon: CreditCard,
            },
            {
              n: "04",
              title: "跟踪交付",
              desc: "在订单中心查看订单、支付与交付进展。",
              icon: PackageCheck,
            },
          ].map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-slate-200/80 bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-slate-50 text-slate-700">
                  <s.icon size={21} />
                </span>
                <span className="text-2xl font-bold text-slate-100">{s.n}</span>
              </div>
              <h3 className="mt-5 font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{s.desc}</p>
              {i < 3 && (
                <ArrowRight
                  size={16}
                  className="absolute -right-3 top-1/2 z-10 hidden text-slate-300 md:block"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-10 text-white sm:px-10 md:flex md:items-center md:justify-between">
          <div className="absolute -right-10 -top-24 size-72 rounded-full border border-white/10" />
          <div className="relative">
            <p className="text-xs font-bold tracking-[.2em] text-blue-200">
              BUILD WITH CONFIDENCE
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              为下一步数字化升级做好准备
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              选择合适的服务方案，让技术落地更有计划。
            </p>
          </div>
          <Link
            to="/services"
            className="relative mt-6 inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50 md:mt-0"
          >
            开始选购 <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function PageIntro({ eyebrow, title, desc, crumbs = [] }) {
  return (
    <div className="border-b border-slate-200/70 bg-white">
      <div className="container-shell py-8">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-blue-600">
            首页
          </Link>
          {crumbs.map((c, i) => (
            <React.Fragment key={c}>
              <ChevronRight size={13} />
              <span className={i === crumbs.length - 1 ? "text-slate-600" : ""}>
                {c}
              </span>
            </React.Fragment>
          ))}
        </div>
        <p className="text-xs font-bold tracking-[.18em] text-blue-600">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ServicesPage({ shop, notify }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [category, setCategory] = useState(query.get("category") || "all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recommended");
  useEffect(() => {
    setCategory(new URLSearchParams(location.search).get("category") || "all");
  }, [location.search]);
  const filtered = useMemo(
    () =>
      services
        .filter(
          (s) =>
            (category === "all" || s.category === category) &&
            `${s.title} ${s.subtitle} ${s.description} ${s.categoryName}`
              .toLowerCase()
              .includes(search.toLowerCase()),
        )
        .sort((a, b) =>
          sort === "low"
            ? a.price - b.price
            : sort === "high"
              ? b.price - a.price
              : Number(b.popular) - Number(a.popular),
        ),
    [category, search, sort],
  );
  return (
    <>
      <PageIntro
        eyebrow="SERVICE CATALOG"
        title="企业服务商城"
        desc="按业务场景选择服务方案，查看服务范围、参考价格和预计交付周期。"
        crumbs={["服务商城"]}
      />
      <main className="container-shell py-8 md:py-10">
        <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${category === c.id ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20" : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600"}`}
              >
                {c.label}
                <span
                  className={`ml-2 text-xs ${category === c.id ? "text-blue-100" : "text-slate-400"}`}
                >
                  {c.count}
                </span>
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 focus-within:border-blue-400 lg:w-64">
              <Search size={17} className="shrink-0 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜索服务名称或关键词"
                className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-600 outline-none focus:border-blue-400"
            >
              <option value="recommended">推荐排序</option>
              <option value="low">价格从低到高</option>
              <option value="high">价格从高到低</option>
            </select>
          </div>
        </div>
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            共找到{" "}
            <span className="font-semibold text-slate-900">
              {filtered.length}
            </span>{" "}
            项服务
          </p>
          <p className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
            <ShieldCheck size={14} /> 价格为参考起价，具体范围以订单约定为准
          </p>
        </div>
        {filtered.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <ServiceCard
                key={s.id}
                service={s}
                onAdd={(id) => {
                  shop.add(id);
                  notify("已加入购物车");
                }}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Search}
            title="没有找到匹配的服务"
            desc="尝试调整关键词或切换服务分类。"
            action={
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                清除筛选
              </button>
            }
          />
        )}
        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-sm leading-6 text-blue-900">
          <div className="flex items-start gap-3">
            <CircleHelp size={19} className="mt-0.5 shrink-0 text-blue-600" />
            <p>
              <strong>采购提示：</strong>
              服务价格为标准服务包参考起价。若实际需求超出列明范围，实施范围、交付周期与费用应由双方另行确认后执行。
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

function DetailPage({ shop, notify }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);
  const [qty, setQty] = useState(1);
  if (!service)
    return (
      <main className="container-shell py-20">
        <EmptyState
          title="未找到此服务"
          desc="该服务可能已调整或不存在。"
          action={
            <Link
              to="/services"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              返回服务商城
            </Link>
          }
        />
      </main>
    );
  const Icon = iconMap[service.icon] || Code2;
  return (
    <>
      <PageIntro
        eyebrow="SERVICE DETAIL"
        title={service.title}
        desc={service.subtitle}
        crumbs={["服务商城", service.categoryName, service.title]}
      />
      <main className="container-shell grid gap-8 py-8 lg:grid-cols-[1fr_360px] lg:py-10">
        <div className="min-w-0 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <ServiceVisual service={service} large />
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {service.categoryName}
              </span>
              {service.tag && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {service.tag}
                </span>
              )}
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock3 size={13} />
                预计交付：{service.delivery}
              </span>
            </div>
            <h2 className="mt-5 text-xl font-bold text-slate-900">服务概述</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {service.description}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["交付周期", service.delivery, Clock3],
                ["服务保障", service.support, ShieldCheck],
                ["服务方式", "项目制交付", Building2],
              ].map(([t, v, I]) => (
                <div key={t} className="rounded-xl bg-slate-50 p-4">
                  <I size={18} className="text-blue-600" />
                  <p className="mt-3 text-xs text-slate-400">{t}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <FileCheck2 size={20} className="text-blue-600" />
              服务范围与交付内容
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <div
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 p-4"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check size={14} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{f}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      纳入本服务包范围
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="mt-7 text-sm font-bold text-slate-900">适用场景</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {service.suitable}
            </p>
            <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50/70 p-4 text-sm leading-6 text-amber-900">
              <strong>服务范围说明：</strong>
              以上内容为标准服务包范围。项目具体需求、第三方费用、部署环境、验收标准及超出范围的工作量，以双方确认的订单附件或服务协议为准。
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <h2 className="text-lg font-bold text-slate-900">服务实施流程</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-4">
              {[
                ["01", "需求确认"],
                ["02", "方案与计划"],
                ["03", "实施与测试"],
                ["04", "交付与验收"],
              ].map(([n, t], i) => (
                <div key={n} className="flex gap-3 sm:block">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-xs font-bold text-blue-600">
                    {n}
                  </span>
                  <div className="pt-1 sm:pt-3">
                    <p className="text-sm font-semibold text-slate-800">{t}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {
                        [
                          "明确范围与目标",
                          "确认交付计划",
                          "阶段沟通与验证",
                          "移交文档及验收",
                        ][i]
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="h-fit lg:sticky lg:top-24">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 panel-shadow">
            <p className="text-xs font-semibold tracking-wide text-slate-400">
              服务参考价格
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-tight text-slate-900">
                {formatMoney(service.price)}
              </span>
              <span className="text-xs text-slate-400">{service.unit}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              实际金额以确认的服务范围与订单为准
            </p>
            <div className="my-5 border-t border-slate-100" />
            <div className="space-y-4 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">预计交付周期</span>
                <span className="font-semibold text-slate-800">
                  {service.delivery}
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">售后支持</span>
                <span className="font-semibold text-slate-800">
                  {service.support}
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">服务类型</span>
                <span className="font-semibold text-slate-800">
                  {service.categoryName}
                </span>
              </div>
            </div>
            <div className="my-5 border-t border-slate-100" />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                采购数量
              </span>
              <div className="flex items-center rounded-lg border border-slate-200">
                <button
                  className="grid size-9 place-items-center text-slate-500 hover:text-blue-600"
                  onClick={() => setQty((v) => Math.max(1, v - 1))}
                >
                  <Minus size={15} />
                </button>
                <span className="w-9 text-center text-sm font-semibold">
                  {qty}
                </span>
                <button
                  className="grid size-9 place-items-center text-slate-500 hover:text-blue-600"
                  onClick={() => setQty((v) => Math.min(99, v + 1))}
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-3">
              <span className="text-xs text-slate-500">小计</span>
              <span className="text-lg font-bold text-slate-900">
                {formatMoney(service.price * qty)}
              </span>
            </div>
            <button
              onClick={() => {
                shop.add(service.id, qty);
                notify("已加入购物车");
              }}
              className="mt-4 flex w-full items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              <ShoppingCart size={17} className="mr-2" />
              加入购物车
            </button>
            <button
              onClick={() => {
                shop.add(service.id, qty);
                navigate("/checkout");
              }}
              className="mt-3 flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
            >
              立即购买 <ArrowRight size={16} className="ml-2" />
            </button>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <LockKeyhole size={12} /> 安全下单 · 订单可追踪
            </p>
          </div>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-slate-50 text-slate-600">
                <Headphones size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  采购问题？
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  联系服务顾问了解服务范围
                </p>
              </div>
            </div>
            <a
              href="mailto:service@example.com"
              className="mt-3 block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              service@example.com
            </a>
          </div>
        </aside>
      </main>
    </>
  );
}

function EmptyState({ icon: Icon = PackageCheck, title, desc, action }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white px-5 py-12 text-center">
      <span className="grid size-14 place-items-center rounded-2xl bg-slate-50 text-slate-400">
        <Icon size={25} />
      </span>
      <h3 className="mt-4 font-bold text-slate-800">{title}</h3>
      {desc && (
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">{desc}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

function CartPage({ shop }) {
  const navigate = useNavigate();
  const cartItems = shop.cart
    .map((i) => ({ ...i, service: services.find((s) => s.id === i.id) }))
    .filter((i) => i.service);
  return (
    <>
      <PageIntro
        eyebrow="YOUR CART"
        title="采购清单"
        desc="核对服务项目与数量，确认无误后继续填写订单信息。"
        crumbs={["采购清单"]}
      />
      <main className="container-shell py-8 md:py-10">
        {!cartItems.length ? (
          <EmptyState
            icon={ShoppingCart}
            title="购物车还是空的"
            desc="先去服务商城选择适合业务需求的服务方案。"
            action={
              <Link
                to="/services"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                浏览服务商城
              </Link>
            }
          />
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_340px]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <p className="font-bold text-slate-900">
                  已选服务{" "}
                  <span className="ml-1 text-sm font-normal text-slate-400">
                    ({shop.cartCount} 件)
                  </span>
                </p>
                <button
                  onClick={shop.clear}
                  className="text-xs text-slate-400 hover:text-rose-500"
                >
                  清空清单
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {cartItems.map(({ id, qty, service: s }) => (
                  <div key={id} className="flex gap-4 p-5">
                    <Link
                      to={`/services/${id}`}
                      className="hidden w-28 shrink-0 sm:block"
                    >
                      <ServiceVisual service={s} />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link
                        to={`/services/${id}`}
                        className="font-bold text-slate-900 hover:text-blue-600"
                      >
                        {s.title}
                      </Link>
                      <p className="mt-1 text-xs text-slate-400">
                        {s.categoryName} · {s.delivery}
                      </p>
                      <p className="mt-3 text-lg font-bold text-slate-900">
                        {formatMoney(s.price)}
                        <span className="ml-1 text-xs font-normal text-slate-400">
                          {s.unit}
                        </span>
                      </p>
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center rounded-lg border border-slate-200">
                          <button
                            onClick={() => shop.setQty(id, qty - 1)}
                            className="grid size-8 place-items-center text-slate-500 hover:text-blue-600"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{qty}</span>
                          <button
                            onClick={() => shop.setQty(id, qty + 1)}
                            className="grid size-8 place-items-center text-slate-500 hover:text-blue-600"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-bold text-slate-900">
                            {formatMoney(s.price * qty)}
                          </span>
                          <button
                            onClick={() => shop.remove(id)}
                            className="text-xs text-slate-400 hover:text-rose-500"
                          >
                            移除
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-4">
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-blue-600"
                >
                  <ArrowLeft size={15} className="mr-2" />
                  继续选购
                </Link>
              </div>
            </div>
            <aside className="rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
              <h2 className="font-bold text-slate-900">订单金额</h2>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between text-slate-500">
                  <span>服务项目</span>
                  <span>{shop.cartCount} 件</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>服务金额</span>
                  <span>{formatMoney(shop.total)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>折扣</span>
                  <span>—</span>
                </div>
              </div>
              <div className="my-5 border-t border-slate-100" />
              <div className="flex items-end justify-between">
                <span className="text-sm font-semibold text-slate-700">
                  应付金额
                </span>
                <span className="text-2xl font-bold text-slate-900">
                  {formatMoney(shop.total)}
                </span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                确认订单 <ArrowRight size={16} className="ml-2" />
              </button>
              <p className="mt-4 text-xs leading-5 text-slate-400">
                提交订单前请确认服务范围与交付说明。涉及额外需求的部分需另行协商。
              </p>
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-700">
                <ShieldCheck size={16} /> 订单信息仅用于本次采购演示
              </div>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}

function CheckoutPage({ shop }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    taxId: "",
    note: "",
  });
  const [payment, setPayment] = useState("bank");
  const [agreed, setAgreed] = useState(true);
  const [error, setError] = useState("");
  const cartItems = shop.cart
    .map((i) => ({ ...i, service: services.find((s) => s.id === i.id) }))
    .filter((i) => i.service);
  const change = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    if (!cartItems.length) {
      setError("采购清单为空，请先选择服务。");
      return;
    }
    if (
      !form.company.trim() ||
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim()
    ) {
      setError("请填写企业名称、联系人、联系电话和电子邮箱。");
      return;
    }
    if (!/^1\d{10}$/.test(form.phone.trim())) {
      setError("请输入有效的 11 位中国大陆手机号码。");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("请输入有效的电子邮箱地址。");
      return;
    }
    if (!agreed) {
      setError("请先确认服务范围与订单条款。");
      return;
    }
    const order = shop.createOrder(form, payment);
    navigate(`/payment/${order.id}`);
  };
  if (!cartItems.length)
    return (
      <>
        <PageIntro
          eyebrow="CHECKOUT"
          title="确认订单"
          desc="填写采购信息并确认订单。"
          crumbs={["采购清单", "确认订单"]}
        />
        <main className="container-shell py-10">
          <EmptyState
            icon={ShoppingCart}
            title="没有可结算的服务"
            desc="请先将服务添加到购物车。"
            action={
              <Link
                to="/services"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                前往服务商城
              </Link>
            }
          />
        </main>
      </>
    );
  return (
    <>
      <PageIntro
        eyebrow="CHECKOUT"
        title="确认订单"
        desc="请填写企业采购信息，提交后将生成订单并进入支付确认流程。"
        crumbs={["采购清单", "确认订单"]}
      />
      <main className="container-shell py-8 md:py-10">
        <form
          onSubmit={submit}
          className="grid items-start gap-6 lg:grid-cols-[1fr_360px]"
        >
          <div className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                  <Building2 size={20} />
                </span>
                <div>
                  <h2 className="font-bold text-slate-900">企业采购信息</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    用于订单联系与项目交付沟通
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  ["company", "企业 / 组织名称", "例如：XX科技有限公司", true],
                  ["name", "联系人", "请输入联系人姓名", true],
                  ["phone", "联系电话", "11 位手机号码", true],
                  ["email", "电子邮箱", "name@company.com", true],
                  [
                    "taxId",
                    "纳税人识别号（选填）",
                    "如需开票，请填写识别号",
                    false,
                  ],
                ].map(([name, label, placeholder, required]) => (
                  <label
                    key={name}
                    className={`block ${name === "taxId" ? "sm:col-span-2" : ""}`}
                  >
                    <span className="mb-2 block text-sm font-medium text-slate-700">
                      {label}
                      {required && (
                        <span className="ml-1 text-rose-500">*</span>
                      )}
                    </span>
                    <input
                      name={name}
                      value={form[name]}
                      onChange={change}
                      required={required}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </label>
                ))}
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-slate-700">
                    项目补充说明（选填）
                  </span>
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={change}
                    rows="3"
                    placeholder="请简要描述项目背景、系统环境或需要特别确认的交付事项。"
                    className="w-full resize-y rounded-xl border border-slate-200 px-3.5 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                  />
                </label>
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-violet-50 text-violet-600">
                  <CreditCard size={20} />
                </span>
                <div>
                  <h2 className="font-bold text-slate-900">选择支付方式</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    当前为交互演示，不会发起真实扣款
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  // {
                  //   id: "bank",
                  //   title: "企业银行转账",
                  //   desc: "适合企业对公采购",
                  //   icon: Building2,
                  // },
                  {
                    id: "alipay",
                    title: "支付宝",
                    desc: "使用支付宝扫码支付",
                    icon: AliPayIcon,
                  },
                  {
                    id: "wechat",
                    title: "微信支付",
                    desc: "使用微信扫码支付",
                    icon: WechatPayIcon,
                  },
                  {
                    id: "paypal",
                    title: "PayPal",
                    desc: "使用 PayPal 账户支付",
                    icon: PaypalIcon,
                  },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPayment(p.id)}
                    className={`flex items-start gap-3 rounded-xl border p-4 text-left transition ${payment === p.id ? "border-blue-500 bg-blue-50/70 ring-2 ring-blue-500/10" : "border-slate-200 hover:border-slate-300"}`}
                  >
                    <span
                      className={`grid size-9 place-items-center rounded-lg`}
                    >
                      <p.icon size={18} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-slate-800">
                        {p.title}
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        {p.desc}
                      </span>
                    </span>
                    {payment === p.id && (
                      <CheckCircle2 size={17} className="text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
              {payment === "bank" && (
                <div className="mt-4 rounded-xl bg-slate-50 p-4 text-xs leading-6 text-slate-500">
                  提交后生成待支付订单。实际对公账户信息应由商家在正式上线后配置，并通过安全渠道展示；演示项目不会提供真实收款账号。
                </div>
              )}
            </section>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 size-4 accent-blue-600"
                />
                <span className="text-xs leading-5 text-slate-500">
                  我已阅读并确认所选服务的范围、参考价格、交付周期及服务说明。最终实施范围与验收标准以双方确认的正式订单附件或服务协议为准。
                </span>
              </label>
            </div>
            {error && (
              <div
                role="alert"
                className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
              >
                {error}
              </div>
            )}
            <div className="flex items-center justify-between">
              <Link
                to="/cart"
                className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600"
              >
                <ArrowLeft size={15} className="mr-2" />
                返回采购清单
              </Link>
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                提交订单 <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
            <h2 className="font-bold text-slate-900">采购摘要</h2>
            <div className="mt-5 space-y-4">
              {cartItems.map(({ id, qty, service: s }) => (
                <div key={id} className="flex justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-800">
                      {s.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {qty} × {formatMoney(s.price)}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-slate-800">
                    {formatMoney(s.price * qty)}
                  </span>
                </div>
              ))}
            </div>
            <div className="my-5 border-t border-slate-100" />
            <div className="flex justify-between text-sm text-slate-500">
              <span>服务项目数量</span>
              <span>{shop.cartCount} 件</span>
            </div>
            <div className="mt-4 flex items-end justify-between">
              <span className="text-sm font-semibold text-slate-700">
                应付金额
              </span>
              <span className="text-2xl font-bold text-slate-900">
                {formatMoney(shop.total)}
              </span>
            </div>
            <div className="mt-5 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-800">
              说明：当前展示为服务包参考价。若需求超出标准范围，需另行确认报价与合同条款。
            </div>
          </aside>
        </form>
      </main>
    </>
  );
}

function PaymentPage({ shop }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = shop.orders.find((o) => o.id === id);
  const [confirm, setConfirm] = useState(false);
  if (!order)
    return (
      <>
        <PageIntro
          eyebrow="ORDER PAYMENT"
          title="订单支付"
          desc="订单信息与支付状态。"
          crumbs={["订单支付"]}
        />
        <main className="container-shell py-10">
          <EmptyState
            title="没有找到此订单"
            desc="订单可能已清除，或当前浏览器中不存在该订单。"
            action={
              <Link
                to="/orders"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                查看我的订单
              </Link>
            }
          />
        </main>
      </>
    );
  const paid = order.status === "已支付";
  const simulatePay = () => {
    shop.payOrder(order.id);
    setConfirm(true);
  };
  return (
    <>
      <PageIntro
        eyebrow="ORDER PAYMENT"
        title={paid ? "支付已完成" : "订单支付确认"}
        desc={
          paid
            ? "订单已记录为支付成功，可以在订单中心查看详情。"
            : "请核对订单信息。此页面只模拟支付流程，不会发起真实扣款。"
        }
        crumbs={["订单支付"]}
      />
      <main className="container-shell max-w-3xl py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center sm:p-10">
          <span
            className={`mx-auto grid size-16 place-items-center rounded-2xl ${paid ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"}`}
          >
            {paid ? <CheckCircle2 size={31} /> : <CreditCard size={29} />}
          </span>
          <h2 className="mt-5 text-2xl font-bold text-slate-900">
            {paid ? "支付成功" : "等待支付确认"}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {paid
              ? "感谢您的采购，订单已进入后续服务流程。"
              : "请确认支付方式与订单金额，然后完成模拟支付。"}
          </p>
          <div className="mx-auto mt-7 max-w-md rounded-2xl bg-slate-50 p-5">
            <p className="text-xs text-slate-400">订单应付金额</p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
              {formatMoney(order.total)}
            </p>
            <div className="mt-4 border-t border-slate-200 pt-4 text-left text-sm">
              <div className="flex justify-between gap-4 py-2">
                <span className="text-slate-500">订单编号</span>
                <span className="font-semibold text-slate-800">{order.id}</span>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <span className="text-slate-500">支付方式</span>
                <span className="font-semibold text-slate-800">
                  {order.paymentMethod === "bank"
                    ? "企业银行转账"
                    : "在线支付（模拟）"}
                </span>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <span className="text-slate-500">订单状态</span>
                <span
                  className={`font-semibold ${paid ? "text-emerald-600" : "text-amber-600"}`}
                >
                  {order.status}
                </span>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <span className="text-slate-500">创建时间</span>
                <span className="text-right text-slate-700">
                  {order.createdAt}
                </span>
              </div>
            </div>
          </div>
          {!paid && (
            <div className="mx-auto mt-6 max-w-md rounded-xl border border-amber-200 bg-amber-50 p-4 text-left">
              <p className="flex items-center gap-2 text-sm font-semibold text-amber-900">
                <CircleHelp size={17} />
                演示支付说明
              </p>
              <p className="mt-2 text-xs leading-6 text-amber-800">
                点击下方按钮会直接把本地订单标记为“已支付”，用于测试前端流程。正式环境必须接入合规支付服务端，由服务端验证支付回调后更新状态。
              </p>
              <label className="mt-3 flex items-center gap-2 text-xs text-amber-900">
                <input
                  type="checkbox"
                  checked={confirm}
                  onChange={(e) => setConfirm(e.target.checked)}
                  className="size-4 accent-blue-600"
                />
                我了解这是模拟支付，不会产生真实扣款
              </label>
              <button
                disabled={!confirm}
                onClick={simulatePay}
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                确认模拟支付 <Check size={16} className="ml-2" />
              </button>
            </div>
          )}
          {paid && (
            <div className="mx-auto mt-6 max-w-md rounded-xl bg-emerald-50 p-4 text-left text-sm text-emerald-800">
              <p className="flex items-center gap-2 font-semibold">
                <CheckCircle2 size={17} />
                订单支付状态已更新
              </p>
              <p className="mt-1 text-xs">
                支付时间：{order.paidAt || "演示支付"}
              </p>
            </div>
          )}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/orders"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              查看订单详情
            </Link>
            <Link
              to="/services"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              继续选购
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

function OrdersPage({ shop }) {
  const [filter, setFilter] = useState("all");
  const orders = shop.orders.filter(
    (o) =>
      filter === "all" ||
      (filter === "paid" ? o.status === "已支付" : o.status === "待支付"),
  );
  return (
    <>
      <PageIntro
        eyebrow="ORDER CENTER"
        title="我的订单"
        desc="统一查看采购订单、支付状态与服务清单。当前订单保存在此浏览器本地。"
        crumbs={["我的订单"]}
      />
      <main className="container-shell py-8 md:py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {[
              ["all", "全部订单"],
              ["pending", "待支付"],
              ["paid", "已支付"],
            ].map(([v, t]) => (
              <button
                key={v}
                onClick={() => setFilter(v)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium ${filter === v ? "bg-blue-600 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <Link
            to="/services"
            className="inline-flex items-center text-sm font-semibold text-blue-600"
          >
            继续选购 <ArrowRight size={15} className="ml-2" />
          </Link>
        </div>
        {!orders.length ? (
          <EmptyState
            icon={ReceiptText}
            title={filter === "all" ? "还没有订单" : "没有符合条件的订单"}
            desc="选购服务并提交订单后，可在这里查看采购记录与支付状态。"
            action={
              <Link
                to="/services"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                浏览服务商城
              </Link>
            }
          />
        ) : (
          <div className="space-y-4">
            {orders.map((o) => (
              <article
                key={o.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/60 px-5 py-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      订单编号：{o.id}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      下单时间：{o.createdAt}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${o.status === "已支付" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}
                  >
                    {o.status}
                  </span>
                </div>
                <div className="space-y-4 p-5">
                  {o.items.map((item, i) => (
                    <div
                      key={`${item.id}-${i}`}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600">
                          <Layers3 size={17} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            数量：{item.qty} · {formatMoney(item.price)}
                            {item.unit}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-slate-800">
                        {formatMoney(item.price * item.qty)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-between gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center">
                  <div className="text-xs text-slate-500">
                    采购方：{o.customer.company} · 联系人：{o.customer.name}
                    <p className="mt-1">
                      支付方式：
                      {o.paymentMethod === "bank"
                        ? "企业银行转账"
                        : "在线支付（模拟）"}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-5 sm:justify-end">
                    <div className="text-right">
                      <p className="text-[11px] text-slate-400">订单总额</p>
                      <p className="mt-1 text-xl font-bold text-slate-900">
                        {formatMoney(o.total)}
                      </p>
                    </div>
                    {o.status === "待支付" ? (
                      <Link
                        to={`/payment/${o.id}`}
                        className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-700"
                      >
                        去支付
                      </Link>
                    ) : (
                      <Link
                        to={`/payment/${o.id}`}
                        className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        订单详情
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-400">
          演示说明：订单数据存储在当前浏览器的 localStorage
          中。清除浏览器数据或更换设备后不会自动同步。正式上线需要服务端订单、用户认证和支付回调支持。
        </div>
      </main>
    </>
  );
}

export default function App() {
  const shop = useShop();
  const [toast, setToast] = useState("");
  const notify = React.useCallback((message) => setToast(message), []);
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Header shop={shop} />
      <Routes>
        <Route path="/" element={<Home shop={shop} notify={notify} />} />
        <Route
          path="/services"
          element={<ServicesPage shop={shop} notify={notify} />}
        />
        <Route
          path="/services/:id"
          element={<DetailPage shop={shop} notify={notify} />}
        />
        <Route path="/cart" element={<CartPage shop={shop} />} />
        <Route path="/checkout" element={<CheckoutPage shop={shop} />} />
        <Route path="/payment/:id" element={<PaymentPage shop={shop} />} />
        <Route path="/orders" element={<OrdersPage shop={shop} />} />
        <Route
          path="*"
          element={
            <main className="container-shell py-20">
              <EmptyState
                title="页面不存在"
                desc="你访问的页面不存在或已调整。"
                action={
                  <Link
                    to="/"
                    className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white"
                  >
                    返回首页
                  </Link>
                }
              />
            </main>
          }
        />
      </Routes>
      <Footer />
      <Toast message={toast} onClose={() => setToast("")} />
    </div>
  );
}
