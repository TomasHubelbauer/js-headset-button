window.addEventListener('load', async () => {
	try {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		const context = new AudioContext();
		const source = context.createMediaStreamSource(stream);
		const analyser = context.createAnalyser();
		source.connect(analyser);
		analyser.connect(context.destination);
	
		const height = 20;
	
		const byteFrequencyData = new Uint8Array(analyser.frequencyBinCount);
		const byteFrequencyDataCanvas = document.getElementById('byteFrequencyDataCanvas');
		byteFrequencyDataCanvas.width = analyser.frequencyBinCount;
		byteFrequencyDataCanvas.height = height;
		const byteFrequencyDataContext = byteFrequencyDataCanvas.getContext('2d');
		byteFrequencyDataContext.strokeWidth = 1;
	
		const byteTimeDomainData = new Uint8Array(analyser.fftSize);
		const byteTimeDomainDataCanvas = document.getElementById('byteTimeDomainDataCanvas');
		byteTimeDomainDataCanvas.width = analyser.fftSize;
		byteTimeDomainDataCanvas.height = height;
		const byteTimeDomainDataContext = byteTimeDomainDataCanvas.getContext('2d');
		byteTimeDomainDataContext.strokeWidth = 1;
	
		window.requestAnimationFrame(function tick() {
			analyser.getByteFrequencyData(byteFrequencyData);
			for (let index = 0; index < byteFrequencyData.length; index++) {
				const byte = byteFrequencyData[index];
				byteFrequencyDataContext.strokeStyle = `rgb(${byte}, ${byte}, ${byte})`;
				byteFrequencyDataContext.beginPath();
				byteFrequencyDataContext.moveTo(index, 0);
				byteFrequencyDataContext.lineTo(index, height);
				byteFrequencyDataContext.stroke();
			}
	
			analyser.getByteTimeDomainData(byteTimeDomainData);
			for (let index = 0; index < byteTimeDomainData.length; index++) {
				const byte = byteTimeDomainData[index];
				byteTimeDomainDataContext.strokeStyle = `rgb(${byte}, ${byte}, ${byte})`;
				byteTimeDomainDataContext.beginPath();
				byteTimeDomainDataContext.moveTo(index, 0);
				byteTimeDomainDataContext.lineTo(index, height);
				byteTimeDomainDataContext.stroke();
			}
	
			window.requestAnimationFrame(tick);
		});
	} catch (error) {
		alert(error.toString());
	}
});
