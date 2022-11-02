import React = require('react');

export interface NavigationItem {
  name: string;
  prefixIcon?: string;
  suffixIcon?: string;
}

export interface NavigationProps {
  solid?: boolean;
  selectedIndex?: number;
  onClickCollapseEvent?: (
    collapse: boolean,
    event: React.MouseEvent<HTMLElement>
  ) => void;
  onClickItem?: (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
    index: number
  ) => void;
  onClickLogo?: (event: React.MouseEvent<HTMLElement>) => void;
  hasLogo?: boolean;
  role?: string;
  width?: number;
  navList?: any[];
  ariaLabel?: string;
  titleTemplate?: () => React.ReactNode;
  userTemplate?: () => React.ReactNode;
  className?: string;
  collapsed?: boolean;
  hasHeader?: boolean;
  defaultCollapsed?: boolean;
}

export const NavigationItem = React.forwardRef<HTMLElement, NavigationProps>(
  (
    {
      solid = false,
      selectedIndex = 0,
      onClickCollapseEvent,
      onClickItem,
      onClickLogo,
      hasLogo = true,
      role = 'link',
      width = 280,
      navList,
      ariaLabel = 'Side navigation',
      titleTemplate,
      userTemplate,
      className,
      collapsed: collapsedProp,
      hasHeader = true,
      defaultCollapsed,
    },
    ref
  ) => {
    const navRef = React.useRef(null);

    const tempWidthRef = React.useRef<number>(width);

    const classes = '';

    const onClick = (
      event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
      index: number
    ) => {
      onClickItem?.(event, index);
    };

    React.useEffect(() => {
      const nav = navRef.current! as HTMLElement;
    }, []);

    return (
      <nav className={classes} aria-label={ariaLabel}>
        {hasHeader && (
          <div className="ap-navigation-heading">
            <div className="ap-navigation-title-wrapper">
              {hasLogo && (
                <div className="ap-navigation-logo" onClick={onClickLogo}></div>
              )}
              <div className="ap-navigation-title">
                {titleTemplate && (
                  <div className="ap-header-title">{titleTemplate()}</div>
                )}
              </div>
            </div>
            <div className="ap-navigation-avatar-content">
              {userTemplate?.()}
            </div>
          </div>
        )}
        <div className="ap-navigation-content">
          {navList &&
            navList.map((navItem: NavigationItem, index) => {
              return (
                <div
                  key={index}
                  tabIndex={0}
                  role={role}
                  onClick={(event) => onClick(event, index)}
                >
                  <div className="prefix-content">
                    {navItem.prefixIcon && (
                      <span
                        className={`prefixIcon Appkit4-icon icon-${navItem.prefixIcon}-outline`}
                        aria-label={navItem.name}
                      ></span>
                    )}
                  </div>
                  {<span className="itemContent">{navItem.name}</span>}
                </div>
              );
            })}
        </div>
        <div className="ap-navigation-footer">
          <div className="ap-navigation-item collapsed-item"></div>
        </div>
      </nav>
    );
  }
);

NavigationItem.displayName = 'NavigationItem';
