import React from 'react';

export interface NavigationItem {
  name: string;
  prefixIcon?: string;
  suffixIcon?: string;
}

export interface NavigationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'role'> {
  onClickItem?: (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
    index: number
  ) => void;
  navList?: any[];
  titleTemplate?: () => React.ReactNode;
  className?: string;
  hasHeader?: boolean;
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
      style,
      collapsed: collapsedProp,
      hasHeader = true,
      defaultCollapsed,
    },
    ref
  ) => {
    const navRef = React.useRef(null);

    const tempWidthRef = React.useRef<number>(width);

    const onClick = (
      event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
      index: number
    ) => {
      onClickItem?.(event, index);
    };

    return (
      <nav>
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
                </div>
              );
            })}
        </div>
      </nav>
    );
  }
);

NavigationItem.displayName = 'NavigationItem';
