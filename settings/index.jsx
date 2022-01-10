function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Green pass Settings</Text>}>
        
        <ImagePicker
        title="Green pass image"
        description="Take a greenpas Image"
        label="Green Pass Image"
        settingsKey="image"
        imageWidth="300"
        imageHeight="300"
      />
        
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
