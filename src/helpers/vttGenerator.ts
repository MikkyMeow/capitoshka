export const vttGenerator = (episode: any[]) => {
  let result: string[] = [];

  for (let i = 0; i < episode.length; i++) {
    result = [
      ...result,
      `
    ${episode[i].startPos} --> ${episode[i].endPos}
    ${episode[i].eng}
  `,
    ];
  }

  // Create element with <a> tag
  const link = document.createElement('a');

  // Create a blog object with the file content which you want to add to the file
  const file = new Blob([result.join('')], { type: 'text/plain' });

  // Add file content in the object URL
  link.href = URL.createObjectURL(file);

  // Add file name
  link.download = 'subtitles.vtt';

  // Add click event to <a> tag to save file.
  //   link.click();
  //   URL.revokeObjectURL(link.href);
};
