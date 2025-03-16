export function detectScript(text: string): 'korean' | 'default' {
  // Check for Korean characters (Hangul)
  const koreanRegex = /[\u3131-\u314E\u314F-\u3163\uAC00-\uD7A3]/;
  
  if (koreanRegex.test(text)) {
    return 'korean';
  }
  
  return 'default';
} 