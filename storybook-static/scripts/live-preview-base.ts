import { ContentfulLivePreview } from '@contentful/live-preview';

ContentfulLivePreview.init({
  locale: process.env.LOCALE  || 'en-US',
  debugMode: true,
  enableLiveUpdates: true,
});

ContentfulLivePreview.subscribe('save', {
  callback: async () => {
    const pathname = window.location.pathname;
    await fetch(`/api/revalidate?pathname=${pathname}`);
    window.location.reload();
  },
});