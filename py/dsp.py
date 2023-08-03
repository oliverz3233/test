from scipy.io import wavfile
  import pandas as pd
  import numpy as np
  wget https://github.com/edgeimpulse/processing-blocks/archive/{"76a5d144086154d7132fc4060cbcce292e768c0b"}.zip
  unzip -q {blocks_name}.zip
  mv "processing-blocks-{blocks_name}/mfe" "mfe"
  import numpy as np
  from mfe.dsp import generate_features
  
  input_filename = 'dog8.wav'
  samrate, data = wavfile.read(input_filename)
  listData = []
  if(len(data.shape) == 1):
    for i in range(0, data.shape[0]):
      listData.append(data[i])
  else:
    for i in range(0, data.shape[0]):
      listData.append(data[i][0])
  raw_features = np.array(listData)
  result = generate_features(implementation_version=3,
                           draw_graphs=False,
                           raw_data=raw_features,
                           axes=[""],
                           sampling_freq=44100,
                           frame_length=0.02,
                           frame_stride=0.01,
                           num_filters=40,
                           fft_length=256,
                           low_frequency=0,
                           high_frequency=0,
                           win_size=1000,
                           noise_floor_db=-52)
  print(result)
