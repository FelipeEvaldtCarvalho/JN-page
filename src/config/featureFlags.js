/**
 * Feature Flags Configuration
 *
 * Configure aqui as funcionalidades que podem ser ativadas/desativadas
 * através de variáveis de ambiente (.env files).
 *
 * Todas as variáveis devem começar com VITE_ para serem acessíveis no frontend.
 */

/**
 * Converte string de env para boolean
 * @param {string} value - Valor da variável de ambiente
 * @param {boolean} defaultValue - Valor padrão se não definido
 * @returns {boolean}
 */
const envToBoolean = (value, defaultValue = false) => {
  if (value === undefined || value === null) return defaultValue;
  return value.toLowerCase() === "true";
};

export const featureFlags = {
  // Blog feature
  BLOG_ENABLED: envToBoolean(import.meta.env.VITE_BLOG_ENABLED, false),

  // Newsletter feature
  NEWSLETTER_ENABLED: envToBoolean(
    import.meta.env.VITE_NEWSLETTER_ENABLED,
    false
  ),

  // Chat widget feature
  CHAT_WIDGET_ENABLED: envToBoolean(
    import.meta.env.VITE_CHAT_WIDGET_ENABLED,
    false
  ),

  // Debug mode
  DEBUG_MODE: envToBoolean(
    import.meta.env.VITE_DEBUG_MODE,
    import.meta.env.DEV
  ),
};

/**
 * Função helper para verificar se uma feature está ativa
 * @param {string} flagName - Nome da feature flag
 * @returns {boolean} - Se a feature está ativa ou não
 */
export const isFeatureEnabled = (flagName) => {
  return featureFlags[flagName] === true;
};

/**
 * Lista de features disponíveis para debug
 */
export const getActiveFeatures = () => {
  return Object.entries(featureFlags)
    .filter(([, value]) => value === true)
    .map(([key]) => key);
};

/**
 * Função para debug - mostra todas as feature flags no console
 */
export const debugFeatureFlags = () => {
  console.group("🚩 Feature Flags Status");
  Object.entries(featureFlags).forEach(([key, value]) => {
    console.log(`${key}: ${value ? "✅ ENABLED" : "❌ DISABLED"}`);
  });
  console.groupEnd();
};
