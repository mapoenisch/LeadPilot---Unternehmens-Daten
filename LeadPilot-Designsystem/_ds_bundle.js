/* @ds-bundle: {"format":4,"namespace":"LeadPilotDesignSystem_8c9681","components":[{"name":"Divider","sourcePath":"components/content/Divider.jsx"},{"name":"Link","sourcePath":"components/content/Link.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"SectionHeader","sourcePath":"components/navigation/SectionHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Modal","sourcePath":"components/surfaces/Modal.jsx"},{"name":"Icon","sourcePath":"components/utility/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/utility/Icon.jsx"}],"sourceHashes":{"components/content/Divider.jsx":"4171ee87b551","components/content/Link.jsx":"963059d90827","components/data/Table.jsx":"5658628003c9","components/feedback/Alert.jsx":"5f155a058087","components/feedback/Badge.jsx":"6f049bda1061","components/forms/Button.jsx":"9d9c02e3326b","components/forms/Input.jsx":"c4e21091bdda","components/navigation/NavItem.jsx":"9fc4cd0080b7","components/navigation/SectionHeader.jsx":"697f0e051e3d","components/navigation/Tabs.jsx":"e27f7cd2d2ee","components/surfaces/Card.jsx":"9981c3089f80","components/surfaces/Modal.jsx":"3201f481e8c2","components/utility/Icon.jsx":"4e177a58f53a","ui_kits/dashboard/LeadsView.jsx":"3baf53ab896a","ui_kits/dashboard/OverviewView.jsx":"fbfbe64a5956","ui_kits/dashboard/SequencesView.jsx":"9518448a7e5b","ui_kits/dashboard/SettingsView.jsx":"9c7881febcf1","ui_kits/dashboard/Sidebar.jsx":"9270b1f4b37a","ui_kits/marketing/CTASection.jsx":"4c30b30f4a8e","ui_kits/marketing/FeatureGrid.jsx":"1928d598d1a4","ui_kits/marketing/Hero.jsx":"8f4afebd68c1","ui_kits/marketing/MarketingHeader.jsx":"91708cef55d5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LeadPilotDesignSystem_8c9681 = window.LeadPilotDesignSystem_8c9681 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Divider.jsx
try { (() => {
function Divider({
  orientation = 'horizontal',
  spacing = 'var(--space-5)',
  style
}) {
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '1px',
        alignSelf: 'stretch',
        background: 'var(--color-border)',
        opacity: 0.6,
        margin: `0 ${spacing}`,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      width: '100%',
      background: 'var(--color-border)',
      opacity: 0.6,
      margin: `${spacing} 0`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Link({
  href = '#',
  children,
  underlineOnHover = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-body)',
      textDecoration: 'none',
      transition: 'color var(--duration-fast) var(--ease-standard)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--color-primary-hover)';
      if (underlineOnHover) e.currentTarget.style.textDecoration = 'underline';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--color-primary)';
      e.currentTarget.style.textDecoration = 'none';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Link.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = []
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    style: {
      textAlign: 'left',
      padding: '10px var(--space-4)',
      color: 'var(--color-text-muted)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-tiny)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, col.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: '1px solid var(--color-border-soft)'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key,
    style: {
      padding: 'var(--space-3) var(--space-4)',
      color: 'var(--color-text)'
    }
  }, col.render ? col.render(row) : row[col.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const VARIANTS = {
  cyan: {
    border: 'var(--color-primary)',
    color: 'var(--color-primary)'
  },
  orange: {
    border: 'var(--color-accent)',
    color: 'var(--color-accent)'
  },
  neutral: {
    border: 'var(--color-border)',
    color: 'var(--color-text-muted)'
  }
};
function Badge({
  variant = 'cyan',
  children,
  icon,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.cyan;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: 'var(--color-bg-deep)',
      border: `1px solid ${v.border}`,
      color: v.color,
      borderRadius: 'var(--radius-pill)',
      padding: '4px 12px',
      fontSize: 'var(--text-tiny)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-small)',
    gap: '6px'
  },
  md: {
    padding: '12px 22px',
    fontSize: 'var(--text-body)',
    gap: '8px'
  },
  lg: {
    padding: '16px 28px',
    fontSize: 'var(--text-body)',
    gap: '8px'
  }
};
function variantStyle(variant) {
  switch (variant) {
    case 'secondary':
      return {
        background: 'transparent',
        color: 'var(--color-primary)',
        border: '1.5px solid var(--color-primary)'
      };
    case 'accent':
      return {
        background: 'var(--color-accent)',
        color: 'var(--color-text-inverse)',
        border: '1.5px solid transparent'
      };
    default:
      return {
        background: 'var(--color-primary)',
        color: 'var(--color-text-inverse)',
        border: '1.5px solid transparent'
      };
  }
}
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = variantStyle(variant);
  const sizeStyle = SIZES[size] || SIZES.md;
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--color-primary-soft)'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizeStyle.gap,
      width: fullWidth ? '100%' : 'auto',
      padding: sizeStyle.padding,
      fontSize: sizeStyle.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...base,
      background: !disabled && hover && hoverBg ? hoverBg : base.background,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  disabled = false,
  error,
  helperText,
  size = 'md',
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const pad = size === 'sm' ? '9px 14px' : '13px 16px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--color-text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      background: 'var(--color-surface)',
      border: `1.5px solid ${error ? 'var(--color-error)' : focused ? 'var(--color-primary)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-md)',
      color: 'var(--color-text)',
      padding: pad,
      fontSize: 'var(--text-body)',
      fontFamily: 'inherit',
      outline: 'none',
      boxShadow: focused && !error ? 'var(--focus-ring)' : 'none',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, rest)), (helperText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-tiny)',
      color: error ? 'var(--color-error)' : 'var(--color-text-muted)'
    }
  }, typeof error === 'string' ? error : helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function NavItem({
  icon,
  label,
  active = false,
  badge,
  onClick,
  href
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: active ? 'var(--color-primary-soft)' : 'transparent',
      color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-medium)',
      textDecoration: 'none',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = 'var(--color-surface-raised)';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = 'transparent';
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), badge);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  description,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-primary)',
      fontSize: 'var(--text-tiny)',
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      marginBottom: 'var(--space-2)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--color-text)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      color: 'var(--color-text-muted)',
      fontSize: 'var(--text-body)',
      maxWidth: '520px'
    }
  }, description)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, actions));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  activeId,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, items.map(item => {
    const active = item.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onChange && onChange(item.id),
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 var(--space-3) 0',
        marginBottom: '-1px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body)',
        fontWeight: 'var(--weight-semibold)',
        color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
        borderBottom: `2px solid ${active ? 'var(--color-primary)' : 'transparent'}`,
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, item.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  featured = false,
  padding = 'var(--space-5)',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-surface)',
      border: `1px solid ${featured ? 'var(--color-primary)' : 'var(--color-border)'}`,
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: featured ? 'var(--shadow-glow-cyan)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md'
}) {
  if (!open) return null;
  const width = {
    sm: '360px',
    md: '480px',
    lg: '640px'
  }[size] || '480px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(14,16,19,.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '90vw',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-modal)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      color: 'var(--color-text)'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--color-text-muted)',
      cursor: 'pointer',
      fontSize: '20px',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-open)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Modal.jsx", error: String((e && e.message) || e) }); }

// components/utility/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATHS = {
  chevronDown: 'M6 9l6 6 6-6',
  chevronRight: 'M9 6l6 6-6 6',
  chevronLeft: 'M15 6l-6 6 6 6',
  check: 'M5 13l4 4L19 7',
  close: 'M6 6l12 12M18 6L6 18',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowUpRight: 'M7 17L17 7M8 7h9v9',
  bell: 'M6 8a6 6 0 1 1 12 0c0 3 1 4.5 1.5 5.5H4.5C5 12.5 6 11 6 8zM9.5 17a2.5 2.5 0 0 0 5 0',
  mail: 'M4 6h16v12H4V6zm0 0l8 7 8-7',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20c1.5-4 5-6 8-6s6.5 2 8 6',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 13a1.7 1.7 0 0 0 .34 1.9l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.9-.34 1.7 1.7 0 0 0-1 1.55V19a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.56 1.7 1.7 0 0 0-1.9.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.9 1.7 1.7 0 0 0-1.55-1H4a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1 1.7 1.7 0 0 0-.34-1.9l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.9.34h0a1.7 1.7 0 0 0 1-1.55V4a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.56 1.7 1.7 0 0 0 1.9-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.9v0a1.7 1.7 0 0 0 1.55 1H20a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1z',
  trash: 'M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13',
  externalLink: 'M14 5h5v5M19 5 10 14M8 5H5v14h14v-3',
  alertTriangle: 'M12 4l9 16H3l9-16zM12 10v4M12 17.5v.01',
  info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 7.5v.01',
  checkCircle: 'M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM8 12l3 3 5-6',
  xCircle: 'M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM9.5 9.5l5 5m0-5-5 5',
  star: 'M12 3l2.6 5.8 6.2.6-4.7 4.2 1.4 6.2L12 16.9 6.5 19.8l1.4-6.2-4.7-4.2 6.2-.6L12 3z',
  filter: 'M4 5h16M7 12h10M10 19h4',
  moreHorizontal: 'M5 12h.01M12 12h.01M19 12h.01',
  calendar: 'M4 7h16v13H4V7zm0 0V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M8 3v4M16 3v4M4 11h16',
  logout: 'M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4M15 16l4-4-4-4M19 12H9',
  send: 'M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z',
  upload: 'M12 16V4m0 0 5 5m-5-5-5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: style
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/utility/Icon.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const MAP = {
  info: {
    color: 'var(--color-primary)',
    bg: 'var(--color-primary-soft)',
    icon: 'info'
  },
  success: {
    color: 'var(--color-success)',
    bg: 'var(--color-success-soft)',
    icon: 'checkCircle'
  },
  warning: {
    color: 'var(--color-warning)',
    bg: 'var(--color-warning-soft)',
    icon: 'alertTriangle'
  },
  error: {
    color: 'var(--color-error)',
    bg: 'var(--color-error-soft)',
    icon: 'xCircle'
  }
};
function Alert({
  variant = 'info',
  title,
  children,
  onDismiss,
  style
}) {
  const v = MAP[variant] || MAP.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      background: v.bg,
      border: `1px solid ${v.color}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      color: 'var(--color-text)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: v.icon,
    size: 18,
    color: v.color,
    style: {
      flexShrink: 0,
      marginTop: '2px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      marginBottom: children ? '2px' : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--color-text-muted)'
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--color-text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/LeadsView.jsx
try { (() => {
const ALL_LEADS = [{
  name: 'Ari Chen',
  company: 'Northwind',
  status: 'Hot',
  owner: 'You'
}, {
  name: 'Priya Rao',
  company: 'Fenwick Co',
  status: 'Won',
  owner: 'You'
}, {
  name: 'Sam Okafor',
  company: 'Delta Labs',
  status: 'New',
  owner: 'Jordan'
}, {
  name: 'Jules Martin',
  company: 'Ocular',
  status: 'New',
  owner: 'Jordan'
}, {
  name: 'Nadia Farouk',
  company: 'Brightline',
  status: 'Hot',
  owner: 'You'
}, {
  name: 'Owen Reyes',
  company: 'Kestrel',
  status: 'Lost',
  owner: 'Jordan'
}];
function LeadsView({
  SectionHeader,
  Tabs,
  Table,
  Badge,
  Button,
  Modal,
  Input
}) {
  const [tab, setTab] = React.useState('all');
  const [open, setOpen] = React.useState(false);
  const rows = tab === 'all' ? ALL_LEADS : ALL_LEADS.filter(l => l.status.toLowerCase() === tab);
  const columns = [{
    key: 'name',
    label: 'Name'
  }, {
    key: 'company',
    label: 'Company'
  }, {
    key: 'status',
    label: 'Status',
    render: r => /*#__PURE__*/React.createElement(Badge, {
      variant: r.status === 'Won' ? 'cyan' : r.status === 'Hot' ? 'orange' : 'neutral'
    }, r.status)
  }, {
    key: 'owner',
    label: 'Owner'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Pipeline",
    title: "Leads",
    description: "All contacts currently being worked.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setOpen(true)
    }, "New lead")
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'hot',
      label: 'Hot'
    }, {
      id: 'new',
      label: 'New'
    }, {
      id: 'won',
      label: 'Won'
    }],
    activeId: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    rows: rows
  }), /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: () => setOpen(false),
    title: "Add a new lead",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setOpen(false)
    }, "Add lead"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jordan Lee"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Acme Corp"
  }))));
}
window.LeadsView = LeadsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/LeadsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/OverviewView.jsx
try { (() => {
const STATS = [{
  label: 'Open pipeline',
  value: '128',
  delta: '+12 this week'
}, {
  label: 'Won this month',
  value: '34',
  delta: '+6 vs last month',
  featured: true
}, {
  label: 'Avg. response time',
  value: '2.4h',
  delta: '−18min vs last month'
}];
const RECENT = [{
  name: 'Ari Chen',
  company: 'Northwind',
  status: 'Hot',
  value: '$8,200'
}, {
  name: 'Priya Rao',
  company: 'Fenwick Co',
  status: 'Won',
  value: '$14,000'
}, {
  name: 'Sam Okafor',
  company: 'Delta Labs',
  status: 'New',
  value: '$3,500'
}, {
  name: 'Jules Martin',
  company: 'Ocular',
  status: 'New',
  value: '$6,100'
}];
function OverviewView({
  Card,
  SectionHeader,
  Table,
  Badge,
  Button
}) {
  const columns = [{
    key: 'name',
    label: 'Name'
  }, {
    key: 'company',
    label: 'Company'
  }, {
    key: 'status',
    label: 'Status',
    render: r => /*#__PURE__*/React.createElement(Badge, {
      variant: r.status === 'Won' ? 'cyan' : r.status === 'Hot' ? 'orange' : 'neutral'
    }, r.status)
  }, {
    key: 'value',
    label: 'Value'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Pipeline",
    title: "Overview",
    description: "Everything currently in motion.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "New lead")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    featured: s.featured
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '13px'
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text)',
      fontFamily: 'var(--font-display)',
      fontSize: '32px',
      fontWeight: 600,
      margin: '4px 0'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      color: s.featured ? 'var(--color-primary)' : 'var(--color-text-muted)',
      fontSize: '12.5px'
    }
  }, s.delta)))), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5) 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      color: 'var(--color-text)'
    }
  }, "Recent leads")), /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    rows: RECENT
  })));
}
window.OverviewView = OverviewView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/OverviewView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/SequencesView.jsx
try { (() => {
const STEPS = [{
  step: 1,
  title: 'Intro email',
  wait: 'Day 0'
}, {
  step: 2,
  title: 'Follow-up',
  wait: 'Day 3'
}, {
  step: 3,
  title: 'Value nudge',
  wait: 'Day 7'
}, {
  step: 4,
  title: 'Final check-in',
  wait: 'Day 14'
}];
function SequencesView({
  SectionHeader,
  Card,
  Badge,
  Button,
  Icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Automation",
    title: "Sequences",
    description: "Outreach steps that run on autopilot.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "New sequence")
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text)',
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      fontWeight: 600
    }
  }, "Outbound \u2014 new leads"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '13px'
    }
  }, "4 steps \xB7 214 enrolled")), /*#__PURE__*/React.createElement(Badge, {
    variant: "cyan"
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.step,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-3) 0',
      borderTop: i > 0 ? '1px solid var(--color-border-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '13px',
      fontWeight: 600,
      flexShrink: 0
    }
  }, s.step), /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 16,
    color: "var(--color-text-muted)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: 'var(--color-text)',
      fontSize: '14px'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '12.5px'
    }
  }, s.wait))))));
}
window.SequencesView = SequencesView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SequencesView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/SettingsView.jsx
try { (() => {
function SettingsView({
  SectionHeader,
  Input,
  Button,
  Divider
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: '480px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Account",
    title: "Settings",
    description: "Update your workspace details."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Workspace name",
    defaultValue: "LeadPilot Sales"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Notification email",
    defaultValue: "alerts@leadpilot.io"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Save changes"));
}
window.SettingsView = SettingsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SettingsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
const NAV = [{
  id: 'overview',
  label: 'Overview',
  icon: 'checkCircle'
}, {
  id: 'leads',
  label: 'Leads',
  icon: 'user'
}, {
  id: 'sequences',
  label: 'Sequences',
  icon: 'send'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'settings'
}];
function Sidebar({
  active,
  onSelect,
  NavItem,
  Icon,
  Badge
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: '240px',
      background: 'var(--color-bg-deep)',
      borderRight: '1px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-5) var(--space-3)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/leadpilot-logo-full.png",
    alt: "LeadPilot",
    style: {
      height: '26px',
      objectFit: 'contain',
      marginLeft: '10px'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, NAV.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.id,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 18
    }),
    label: item.label,
    active: active === item.id,
    onClick: () => onSelect(item.id),
    badge: item.id === 'leads' ? /*#__PURE__*/React.createElement(Badge, {
      variant: "cyan"
    }, "12") : null
  }))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CTASection.jsx
try { (() => {
function CTASection({
  Button
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '0 48px 96px',
      padding: '56px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-primary)',
      boxShadow: 'var(--shadow-glow-cyan)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: '32px',
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, "Ready to fly your leads home?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--color-text-muted)',
      fontSize: '16px'
    }
  }, "Start free \u2014 no credit card required."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get started"));
}
function MarketingFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '24px 48px',
      textAlign: 'center',
      color: 'var(--color-text-muted)',
      fontSize: '13px'
    }
  }, "\xA9 2026 LeadPilot. All rights reserved.");
}
window.CTASection = CTASection;
window.MarketingFooter = MarketingFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CTASection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeatureGrid.jsx
try { (() => {
const FEATURES = [{
  icon: 'send',
  title: 'Automated sequences',
  body: 'Multi-step outreach that adapts to replies, so no lead goes cold.'
}, {
  icon: 'user',
  title: 'Unified pipeline',
  body: 'Every lead, every stage, one view — no more spreadsheet stitching.'
}, {
  icon: 'checkCircle',
  title: 'Smart routing',
  body: 'New leads land with the right rep in seconds, not hours.',
  featured: true
}];
function FeatureGrid({
  Card,
  Icon
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 48px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)',
      maxWidth: '1040px',
      margin: '0 auto'
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.title,
    featured: f.featured,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: 'var(--radius-md)',
      background: f.featured ? 'var(--color-accent-soft)' : 'var(--color-primary-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 20,
    color: f.featured ? 'var(--color-accent)' : 'var(--color-primary)'
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: '19px',
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--color-text-muted)',
      fontSize: '14px',
      lineHeight: 'var(--leading-open)'
    }
  }, f.body)))));
}
window.FeatureGrid = FeatureGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
function Hero({
  Button,
  Badge
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '80px 24px 96px',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "cyan"
  }, "New \u2014 Sequence AI"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(40px, 6vw, 64px)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-text)',
      maxWidth: '820px'
    }
  }, "Lead Pilot drives leads forward."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--color-text-muted)',
      fontSize: '18px',
      maxWidth: '520px',
      lineHeight: 'var(--leading-open)'
    }
  }, "A compact system for modern sales workflows \u2014 route, sequence, and close without the busywork."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "See it in action")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingHeader.jsx
try { (() => {
function MarketingHeader({
  onCta
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 48px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/leadpilot-logo-full.png",
    alt: "LeadPilot",
    style: {
      height: '32px',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#product",
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '14px',
      textDecoration: 'none'
    }
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    style: {
      color: 'var(--color-text-muted)',
      fontSize: '14px',
      textDecoration: 'none'
    }
  }, "Pricing")), onCta);
}
window.MarketingHeader = MarketingHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

})();
