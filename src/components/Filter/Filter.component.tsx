import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Animated, Dimensions} from 'react-native';
import {DropShadow} from '../DropShadow/DropShadow.component';
import {theme} from '@/styles';
import {Button} from '@/components/Button';
import {CharacterFilters} from '@/types';
import UpArrow from '../../icons/UpArrow';
import DownArrow from '../../icons/DownArrow';

const FILTER_OPTIONS: Record<
  keyof Pick<CharacterFilters, 'status' | 'species'>,
  string[]
> = {
  status: ['alive', 'dead', 'unknown'],
  species: ['Human', 'Humanoid'],
};

const SCREEN_HEIGHT = Dimensions.get('window').height;
const FILTER_HEIGHT = SCREEN_HEIGHT / 2;

type FilterProps = {
  onApplyFilters: (filters: CharacterFilters) => void;
  initialFilters?: CharacterFilters;
};

export const Filter = ({onApplyFilters, initialFilters}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<CharacterFilters>(
    initialFilters ?? {},
  );
  const translateY = useState(new Animated.Value(-SCREEN_HEIGHT))[0];

  const toggleFilter = () => {
    Animated.spring(translateY, {
      toValue: isOpen ? -SCREEN_HEIGHT / 2 - 50 : 0,
      useNativeDriver: true,
      damping: 20,
      stiffness: 90,
    }).start();
    setIsOpen(!isOpen);
  };

  const handleOptionPress = (
    category: keyof typeof FILTER_OPTIONS,
    option: string,
  ) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]:
        prev[category] === option
          ? undefined
          : (option.toLowerCase() as CharacterFilters[keyof CharacterFilters]),
    }));
  };

  const handleReset = () => {
    setSelectedFilters({});
  };

  const handleApply = () => {
    onApplyFilters(selectedFilters);
    toggleFilter();
  };

  return (
    <View style={{position: 'relative', zIndex: 1000}}>
      <TouchableOpacity
        onPress={toggleFilter}
        style={{
          backgroundColor: theme.colors.primary,
          paddingVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.xl,
          borderRadius: theme.spacing.xl,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: theme.spacing.sm,
          }}>
          <Text style={{color: theme.colors.white, fontWeight: 'bold'}}>
            FILTER
          </Text>
          {isOpen ? <UpArrow /> : <DownArrow />}
        </View>
      </TouchableOpacity>

      <Animated.View
        style={{
          transform: [{translateY}],
          position: 'absolute',
          width: '100%',
          height: FILTER_HEIGHT,
          top: SCREEN_HEIGHT - FILTER_HEIGHT,
        }}>
        <DropShadow
          borderRadius={theme.spacing.lg}
          shadowColor={theme.colors.primary}>
          <View
            style={{
              backgroundColor: theme.colors.white,
              borderRadius: theme.spacing.lg,
              padding: theme.spacing.lg,
              gap: theme.spacing.lg,
              height: '100%',
            }}>
            <View style={{flex: 1}}>
              {(
                Object.entries(FILTER_OPTIONS) as [
                  keyof typeof FILTER_OPTIONS,
                  string[],
                ][]
              ).map(([category, options]) => (
                <View key={category} style={{marginBottom: theme.spacing.lg}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginBottom: theme.spacing.sm,
                    }}>
                    {category.toUpperCase()}
                  </Text>
                  <View
                    style={{flexDirection: 'column', gap: theme.spacing.sm}}>
                    {options.map(option => (
                      <TouchableOpacity
                        key={option}
                        onPress={() => handleOptionPress(category, option)}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: theme.spacing.sm,
                        }}>
                        <View
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 4,
                            borderWidth: 2,
                            borderColor: theme.colors.primary,
                            backgroundColor:
                              selectedFilters[category] === option.toLowerCase()
                                ? theme.colors.primary
                                : 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          {selectedFilters[category] ===
                            option.toLowerCase() && (
                            <Text style={{color: 'white'}}>✓</Text>
                          )}
                        </View>
                        <Text style={{fontSize: 16}}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Button
                content="RESET"
                variant="outlined"
                onPress={handleReset}
                style={{flex: 1, marginRight: theme.spacing.sm}}
              />
              <Button
                content="APPLY"
                variant="filled"
                onPress={handleApply}
                style={{flex: 1, marginLeft: theme.spacing.sm}}
              />
            </View>
          </View>
        </DropShadow>
      </Animated.View>
    </View>
  );
};

export default Filter;
