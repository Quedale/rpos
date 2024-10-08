// This file is generated by the 'node-soap-servicegenerator'
// visit : https://github.com/BreeeZe/node-soap-servicegenerator for more info

var NOT_IMPLEMENTED = {
  Fault: {
    Code: {
      Value: "soap:client"
    },
    Reason: {
      Text: "Method not implemented"
    }
  }
};
var exports = module.exports = {};

exports.DeviceIOService = {
  DeviceIOService : {
    DeviceIOPort : {
      //var GetServiceCapabilities = { };
      GetServiceCapabilities : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetServiceCapabilitiesResponse = { 
          //Capabilities : { 
            //attributes : {
              //VideoSources : {xs:int},
              //VideoOutputs : {xs:int},
              //AudioSources : {xs:int},
              //AudioOutputs : {xs:int},
              //RelayOutputs : {xs:int},
              //SerialPorts : {xs:int},
              //DigitalInputs : {xs:int},
              //DigitalInputOptions : {xs:boolean}
            //}
          //}
        //
        //};
        //return GetServiceCapabilitiesResponse;
      },

      //var GetRelayOutputOptions = { 
        //RelayOutputToken : { xs:string}
      //
      //};
      GetRelayOutputOptions : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetRelayOutputOptionsResponse = { 
          //RelayOutputOptions : [{ 
            //attributes : {
              //token : {tt:ReferenceToken}
            //},
            //Mode : { xs:string},
            //DelayTimes : { [xs:float]},
            //Discrete : { xs:boolean},
            //Extension : { }
          //}]
        //
        //};
        //return GetRelayOutputOptionsResponse;
      },

      //var GetAudioSources = { };
      GetAudioSources : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetAudioSourcesResponse = { };
        //return GetAudioSourcesResponse;
      },

      //var GetAudioOutputs = { };
      GetAudioOutputs : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetAudioOutputsResponse = { };
        //return GetAudioOutputsResponse;
      },

      //var GetVideoSources = { };
      GetVideoSources : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetVideoSourcesResponse = { };
        //return GetVideoSourcesResponse;
      },

      //var GetVideoOutputs = { };
      GetVideoOutputs : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetVideoOutputsResponse = { 
          //VideoOutputs : [{ 
            //attributes : {
              //token : {tt:ReferenceToken}
            //}
          //
            //Layout : { 
              //PaneLayout : { 
                //Pane : { xs:string},
                //Area : { 
                  //attributes : {
                    //bottom : {xs:float},
                    //top : {xs:float},
                    //right : {xs:float},
                    //left : {xs:float}
                  //}
                //}
              //},
              //Extension : { }
            //},
            //Resolution : { 
              //Width : { xs:int},
              //Height : { xs:int}
            //},
            //RefreshRate : { xs:float},
            //AspectRatio : { xs:float},
            //Extension : { }
          //}]
        //
        //};
        //return GetVideoOutputsResponse;
      },

      //var GetVideoSourceConfiguration = { 
        //VideoSourceToken : { xs:string}
      //
      //};
      GetVideoSourceConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetVideoSourceConfigurationResponse = { 
          //VideoSourceConfiguration : { 
            //attributes : {
              //token : {tt:ReferenceToken}
            //},
            //Name : { xs:string},
            //UseCount : { xs:int}
          //
            //attributes : {
              //ViewMode : {xs:string}
            //},
            //SourceToken : { xs:string},
            //Bounds : { 
              //attributes : {
                //x : {xs:int},
                //y : {xs:int},
                //width : {xs:int},
                //height : {xs:int}
              //}
            //},
            //Extension : { 
              //Rotate : { 
                //Mode : { xs:string},
                //Degree : { xs:int},
                //Extension : { }
              //},
              //Extension : { 
                //LensDescription : [{ 
                  //attributes : {
                    //FocalLength : {xs:float}
                  //},
                  //Offset : { 
                    //attributes : {
                      //x : {xs:float},
                      //y : {xs:float}
                    //}
                  //},
                  //Projection : { 
                    //Angle : { xs:float},
                    //Radius : { xs:float},
                    //Transmittance : { xs:float}
                  //},
                  //XFactor : { xs:float}
                //}],
                //SceneOrientation : [{ 
                  //Mode : { xs:string},
                  //Orientation : { xs:string}
                //}]
              //}
            //}
          //}
        //
        //};
        //return GetVideoSourceConfigurationResponse;
      },

      //var GetVideoOutputConfiguration = { 
        //VideoOutputToken : { xs:string}
      //
      //};
      GetVideoOutputConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetVideoOutputConfigurationResponse = { 
          //VideoOutputConfiguration : { 
            //attributes : {
              //token : {tt:ReferenceToken}
            //},
            //Name : { xs:string},
            //UseCount : { xs:int}
          //
            //OutputToken : { xs:string}
          //}
        //
        //};
        //return GetVideoOutputConfigurationResponse;
      },

      //var GetAudioSourceConfiguration = { 
        //AudioSourceToken : { xs:string}
      //
      //};
      GetAudioSourceConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetAudioSourceConfigurationResponse = { 
          //AudioSourceConfiguration : { 
            //attributes : {
              //token : {tt:ReferenceToken}
            //},
            //Name : { xs:string},
            //UseCount : { xs:int}
          //
            //SourceToken : { xs:string}
          //}
        //
        //};
        //return GetAudioSourceConfigurationResponse;
      },

      //var GetAudioOutputConfiguration = { 
        //AudioOutputToken : { xs:string}
      //
      //};
      GetAudioOutputConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetAudioOutputConfigurationResponse = { 
          //AudioOutputConfiguration : { 
            //attributes : {
              //token : {tt:ReferenceToken}
            //},
            //Name : { xs:string},
            //UseCount : { xs:int}
          //
            //OutputToken : { xs:string},
            //SendPrimacy : { xs:anyURI},
            //OutputLevel : { xs:int}
          //}
        //
        //};
        //return GetAudioOutputConfigurationResponse;
      },

      //var SetVideoSourceConfiguration = { 
        //Configuration : { 
          //attributes : {
            //token : {tt:ReferenceToken}
          //},
          //Name : { xs:string},
          //UseCount : { xs:int}
        //
          //attributes : {
            //ViewMode : {xs:string}
          //},
          //SourceToken : { xs:string},
          //Bounds : { 
            //attributes : {
              //x : {xs:int},
              //y : {xs:int},
              //width : {xs:int},
              //height : {xs:int}
            //}
          //},
          //Extension : { 
            //Rotate : { 
              //Mode : { xs:string},
              //Degree : { xs:int},
              //Extension : { }
            //},
            //Extension : { 
              //LensDescription : [{ 
                //attributes : {
                  //FocalLength : {xs:float}
                //},
                //Offset : { 
                  //attributes : {
                    //x : {xs:float},
                    //y : {xs:float}
                  //}
                //},
                //Projection : { 
                  //Angle : { xs:float},
                  //Radius : { xs:float},
                  //Transmittance : { xs:float}
                //},
                //XFactor : { xs:float}
              //}],
              //SceneOrientation : [{ 
                //Mode : { xs:string},
                //Orientation : { xs:string}
              //}]
            //}
          //}
        //},
        //ForcePersistence : { xs:boolean}
      //
      //};
      SetVideoSourceConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var SetVideoSourceConfigurationResponse = { };
        //return SetVideoSourceConfigurationResponse;
      },

      //var SetVideoOutputConfiguration = { 
        //Configuration : { 
          //attributes : {
            //token : {tt:ReferenceToken}
          //},
          //Name : { xs:string},
          //UseCount : { xs:int}
        //
          //OutputToken : { xs:string}
        //},
        //ForcePersistence : { xs:boolean}
      //
      //};
      SetVideoOutputConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var SetVideoOutputConfigurationResponse = { };
        //return SetVideoOutputConfigurationResponse;
      },

      //var SetAudioSourceConfiguration = { 
        //Configuration : { 
          //attributes : {
            //token : {tt:ReferenceToken}
          //},
          //Name : { xs:string},
          //UseCount : { xs:int}
        //
          //SourceToken : { xs:string}
        //},
        //ForcePersistence : { xs:boolean}
      //
      //};
      SetAudioSourceConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var SetAudioSourceConfigurationResponse = { };
        //return SetAudioSourceConfigurationResponse;
      },

      //var SetAudioOutputConfiguration = { 
        //Configuration : { 
          //attributes : {
            //token : {tt:ReferenceToken}
          //},
          //Name : { xs:string},
          //UseCount : { xs:int}
        //
          //OutputToken : { xs:string},
          //SendPrimacy : { xs:anyURI},
          //OutputLevel : { xs:int}
        //},
        //ForcePersistence : { xs:boolean}
      //
      //};
      SetAudioOutputConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var SetAudioOutputConfigurationResponse = { };
        //return SetAudioOutputConfigurationResponse;
      },

      //var GetVideoSourceConfigurationOptions = { 
        //VideoSourceToken : { xs:string}
      //
      //};
      GetVideoSourceConfigurationOptions : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetVideoSourceConfigurationOptionsResponse = { 
          //VideoSourceConfigurationOptions : { 
            //attributes : {
              //MaximumNumberOfProfiles : {xs:int}
            //},
            //BoundsRange : { 
              //XRange : { 
                //Min : { xs:int},
                //Max : { xs:int}
              //},
              //YRange : { 
                //Min : { xs:int},
                //Max : { xs:int}
              //},
              //WidthRange : { 
                //Min : { xs:int},
                //Max : { xs:int}
              //},
              //HeightRange : { 
                //Min : { xs:int},
                //Max : { xs:int}
              //}
            //},
            //VideoSourceTokensAvailable : { xs:string},
            //Extension : { 
              //Rotate : { 
                //attributes : {
                  //Reboot : {xs:boolean}
                //},
                //Mode : { xs:string},
                //DegreeList : { 
                  //Items : [{ xs:int}]
                //},
                //Extension : { }
              //},
              //Extension : { 
                //SceneOrientationMode : [{ xs:string}]
              //}
            //}
          //}
        //
        //};
        //return GetVideoSourceConfigurationOptionsResponse;
      },

      //var GetVideoOutputConfigurationOptions = { 
        //VideoOutputToken : { xs:string}
      //
      //};
      GetVideoOutputConfigurationOptions : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetVideoOutputConfigurationOptionsResponse = { 
          //VideoOutputConfigurationOptions : { }
        //
        //};
        //return GetVideoOutputConfigurationOptionsResponse;
      },

      //var GetAudioSourceConfigurationOptions = { 
        //AudioSourceToken : { xs:string}
      //
      //};
      GetAudioSourceConfigurationOptions : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetAudioSourceConfigurationOptionsResponse = { 
          //AudioSourceOptions : { 
            //InputTokensAvailable : { xs:string},
            //Extension : { }
          //}
        //
        //};
        //return GetAudioSourceConfigurationOptionsResponse;
      },

      //var GetAudioOutputConfigurationOptions = { 
        //AudioOutputToken : { xs:string}
      //
      //};
      GetAudioOutputConfigurationOptions : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetAudioOutputConfigurationOptionsResponse = { 
          //AudioOutputOptions : { 
            //OutputTokensAvailable : { xs:string},
            //SendPrimacyOptions : [{ xs:anyURI}],
            //OutputLevelRange : { 
              //Min : { xs:int},
              //Max : { xs:int}
            //}
          //}
        //
        //};
        //return GetAudioOutputConfigurationOptionsResponse;
      },

      //var GetRelayOutputs = { };
      GetRelayOutputs : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetRelayOutputsResponse = { 
          //RelayOutputs : [{ 
            //attributes : {
              //token : {tt:ReferenceToken}
            //}
          //
            //Properties : { 
              //Mode : { xs:string},
              //DelayTime : { xs:duration},
              //IdleState : { xs:string}
            //}
          //}]
        //
        //};
        //return GetRelayOutputsResponse;
      },

      //var SetRelayOutputSettings = { 
        //RelayOutput : { 
          //attributes : {
            //token : {tt:ReferenceToken}
          //}
        //
          //Properties : { 
            //Mode : { xs:string},
            //DelayTime : { xs:duration},
            //IdleState : { xs:string}
          //}
        //}
      //
      //};
      SetRelayOutputSettings : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var SetRelayOutputSettingsResponse = { };
        //return SetRelayOutputSettingsResponse;
      },

      //var SetRelayOutputState = { 
        //RelayOutputToken : [{ xs:string}],
        //LogicalState : [{ xs:string}]
      //
      //};
      SetRelayOutputState : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var SetRelayOutputStateResponse = { };
        //return SetRelayOutputStateResponse;
      },

      //var GetDigitalInputs = { };
      GetDigitalInputs : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetDigitalInputsResponse = { 
          //DigitalInputs : [{ 
            //attributes : {
              //token : {tt:ReferenceToken}
            //}
          //
            //attributes : {
              //IdleState : {tt:DigitalIdleState}
            //}
          //}]
        //
        //};
        //return GetDigitalInputsResponse;
      },

      //var GetDigitalInputConfigurationOptions = { 
        //Token : { xs:string}
      //
      //};
      GetDigitalInputConfigurationOptions : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetDigitalInputConfigurationOptionsResponse = { 
          //DigitalInputOptions : { 
            //IdleState : { xs:string}
          //}
        //
        //};
        //return GetDigitalInputConfigurationOptionsResponse;
      },

      //var SetDigitalInputConfigurations = { 
        //DigitalInputs : { 
          //attributes : {
            //token : {tt:ReferenceToken}
          //}
        //
          //attributes : {
            //IdleState : {tt:DigitalIdleState}
          //}
        //}
      //
      //};
      SetDigitalInputConfigurations : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var SetDigitalInputConfigurationsResponse = { };
        //return SetDigitalInputConfigurationsResponse;
      },

      //var GetSerialPorts = { };
      GetSerialPorts : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetSerialPortsResponse = { 
          //SerialPort : [{ 
            //attributes : {
              //token : {tt:ReferenceToken}
            //}
          //}]
        //
        //};
        //return GetSerialPortsResponse;
      },

      //var GetSerialPortConfiguration = { 
        //SerialPortToken : { xs:string}
      //
      //};
      GetSerialPortConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetSerialPortConfigurationResponse = { 
          //SerialPortConfiguration : { 
            //attributes : {
              //token : {tt:ReferenceToken},
              //type : {tmd:SerialPortType}
            //},
            //BaudRate : { xs:int},
            //ParityBit : { xs:string},
            //CharacterLength : { xs:int},
            //StopBit : { xs:float}
          //}
        //
        //};
        //return GetSerialPortConfigurationResponse;
      },

      //var SetSerialPortConfiguration = { 
        //SerialPortConfiguration : { 
          //attributes : {
            //token : {tt:ReferenceToken},
            //type : {tmd:SerialPortType}
          //},
          //BaudRate : { xs:int},
          //ParityBit : { xs:string},
          //CharacterLength : { xs:int},
          //StopBit : { xs:float}
        //},
        //ForcePersistance : { xs:boolean}
      //
      //};
      SetSerialPortConfiguration : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var SetSerialPortConfigurationResponse = { };
        //return SetSerialPortConfigurationResponse;
      },

      //var GetSerialPortConfigurationOptions = { 
        //SerialPortToken : { xs:string}
      //
      //};
      GetSerialPortConfigurationOptions : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var GetSerialPortConfigurationOptionsResponse = { 
          //SerialPortOptions : { 
            //attributes : {
              //token : {tt:ReferenceToken}
            //},
            //BaudRateList : { 
              //Items : [{ xs:int}]
            //},
            //ParityBitList : { 
              //Items : [{ xs:string}]
            //},
            //CharacterLengthList : { 
              //Items : [{ xs:int}]
            //},
            //StopBitList : { 
              //Items : [{ xs:float}]
            //}
          //}
        //
        //};
        //return GetSerialPortConfigurationOptionsResponse;
      },

      //var SendReceiveSerialCommand = { 
        //Token : { xs:string},
        //SerialData : { },
        //TimeOut : { xs:duration},
        //DataLength : { xs:integer},
        //Delimiter : { xs:string}
      //
      //};
      SendReceiveSerialCommand : function(args /*, cb, headers*/) {
        throw NOT_IMPLEMENTED;
        //var SendReceiveSerialCommandResponse = { 
          //SerialData : { }
        //
        //};
        //return SendReceiveSerialCommandResponse;
      },

    }
  }
}
