import React, { useState } from 'react';
import './MobileNavigation.css';

const MobileNavigation = ({ categories, activeCategory, onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const appCategories = [
    { id: 'rentabilidad', name: 'Rentabilidad', color: 'cyan', icon: '💰' },
    { id: 'conversion', name: 'Conversión', color: 'green', icon: '🔄' },
    { id: 'engagement', name: 'Engagement', color: 'blue', icon: '👥' },
    { id: 'fidelizacion', name: 'Fidelización', color: 'purple', icon: '⭐' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Botón Hamburguesa */}
      <div className="mobile-menu-button">
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger-line ${isMenuOpen ? 'line-1-open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'line-2-open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'line-3-open' : ''}`}></span>
        </button>
        <div className="mobile-header-title">
          <h1>📊 KPIs DataflowIA</h1>
        </div>
      </div>

      {/* Menú Hamburguesa */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div
          className={`mobile-menu-panel ${isMenuOpen ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <h2 className="mobile-menu-title">
              <span className="app-icon">📊</span>
              Navegación KPIs
            </h2>
            <button
              className="close-menu-btn"
              onClick={toggleMenu}
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>

          <nav className="mobile-menu-nav">
            <ul className="mobile-menu-list">
              {appCategories.map((category) => (
                <li
                  key={category.id}
                  className={`mobile-menu-item ${activeCategory === category.id ? 'active' : ''} ${category.color}`}
                  onClick={() => handleCategoryClick(category.id)}
                  aria-current={activeCategory === category.id ? 'page' : undefined}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                  {activeCategory === category.id && <span className="active-indicator">●</span>}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
